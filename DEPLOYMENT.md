# 🚀 Drishti Deployment Guide

This guide provides step-by-step instructions for setting up the Drishti project in a GitHub repository and deploying it to production.

## 📋 Prerequisites

Before starting, ensure you have:

- **GitHub account**
- **Google Cloud Platform account**
- **Firebase account**
- **Node.js 18+** installed locally
- **Git** installed locally

## 🛠️ Setup Instructions

### 1. GitHub Repository Setup

#### Create New Repository

1. Go to [GitHub](https://github.com) and click "New repository"
2. Repository name: `drishti-ai-platform`
3. Description: `AI-Powered Situational Awareness Platform for Crowd Management`
4. Set to **Public** or **Private** as needed
5. Initialize with README: **No** (we have our own)
6. Click "Create repository"

#### Push Project to GitHub

```bash
# Navigate to your project directory
cd /path/to/drishti

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Drishti AI Platform"

# Add remote origin
git remote add origin https://github.com/yourusername/drishti-ai-platform.git

# Push to GitHub
git push -u origin main
```

### 2. Environment Configuration

#### Create Environment Files

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Fill in your actual configuration values:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyA...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=drishti-prod.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=drishti-prod
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=drishti-prod.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123

# Google AI and Maps Configuration
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyB...
GOOGLE_VERTEX_AI_PROJECT_ID=drishti-ai-project
GOOGLE_VERTEX_AI_LOCATION=us-central1
GOOGLE_APPLICATION_CREDENTIALS=./service-account.json

# Admin Configuration
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD=SecureAdminPassword123!
```

### 3. Firebase Setup

#### Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Create a project"
3. Project name: `drishti-prod`
4. Enable Google Analytics (optional)
5. Create project

#### Configure Firebase Services

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init
```

Select these services:
- ✅ Firestore
- ✅ Functions
- ✅ Hosting
- ✅ Storage

#### Set up Authentication

1. In Firebase Console → Authentication
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable:
   - **Email/Password**
   - **Google** (configure OAuth)

#### Configure Firestore

1. Go to Firestore Database
2. Create database in production mode
3. Set up security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      allow read: if request.auth != null && 
                     get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
    }
    
    // Events collection
    match /events/{eventId} {
      allow read, write: if request.auth != null;
    }
    
    // Incidents collection
    match /incidents/{incidentId} {
      allow read, write: if request.auth != null;
    }
    
    // Analytics collection (admin only)
    match /analytics/{docId} {
      allow read, write: if request.auth != null && 
                            get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
    }
  }
}
```

### 4. Google Cloud Setup

#### Enable Required APIs

```bash
# Install Google Cloud CLI
# Follow instructions at: https://cloud.google.com/sdk/docs/install

# Authenticate
gcloud auth login

# Set project
gcloud config set project YOUR_PROJECT_ID

# Enable APIs
gcloud services enable aiplatform.googleapis.com
gcloud services enable maps-backend.googleapis.com
gcloud services enable geocoding-backend.googleapis.com
gcloud services enable routes.googleapis.com
gcloud services enable places-backend.googleapis.com
```

#### Create Service Account

```bash
# Create service account
gcloud iam service-accounts create drishti-ai-service \
    --description="Drishti AI Platform Service Account" \
    --display-name="Drishti AI"

# Grant necessary roles
gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
    --member="serviceAccount:drishti-ai-service@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
    --role="roles/aiplatform.user"

gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \
    --member="serviceAccount:drishti-ai-service@YOUR_PROJECT_ID.iam.gserviceaccount.com" \
    --role="roles/storage.admin"

# Create and download key
gcloud iam service-accounts keys create service-account.json \
    --iam-account=drishti-ai-service@YOUR_PROJECT_ID.iam.gserviceaccount.com
```

### 5. Deployment Options

#### Option A: Vercel (Recommended)

1. Go to [Vercel](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure environment variables:
   - Add all variables from `.env.local`
   - Upload `service-account.json` as a file
6. Deploy!

**Automatic Deployments**: Every push to `main` branch will trigger a new deployment.

#### Option B: Firebase Hosting

```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

#### Option C: Docker Deployment

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:

```bash
# Build Docker image
docker build -t drishti-ai .

# Run container
docker run -p 3000:3000 drishti-ai
```

### 6. Post-Deployment Setup

#### Create Admin User

1. Visit your deployed application
2. Register a new account with your admin email
3. Go to Firebase Console → Firestore
4. Find your user document
5. Edit and set `isAdmin: true`

#### Test All Features

- ✅ User registration/login
- ✅ Google OAuth authentication
- ✅ Admin portal access
- ✅ 3D animations loading
- ✅ Responsive design
- ✅ Feature pages

### 7. Monitoring & Analytics

#### Set up Firebase Analytics

```javascript
// In your Firebase config
import { getAnalytics } from 'firebase/analytics';

const analytics = getAnalytics(app);
```

#### Set up Error Tracking

Consider integrating:
- **Sentry** for error monitoring
- **Google Analytics** for usage tracking
- **LogRocket** for user session recording

### 8. Security Checklist

- ✅ Environment variables secured
- ✅ Firebase security rules configured
- ✅ Service account permissions minimal
- ✅ HTTPS enabled
- ✅ CORS properly configured
- ✅ Input validation implemented
- ✅ Rate limiting configured

### 9. Performance Optimization

#### Enable Caching

```javascript
// next.config.js
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'firebasestorage.googleapis.com'],
  },
  // Enable caching
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
}
```

#### Optimize Bundle Size

```bash
# Analyze bundle
npm install --save-dev @next/bundle-analyzer

# Add to package.json scripts
"analyze": "ANALYZE=true npm run build"

# Run analysis
npm run analyze
```

### 10. Backup Strategy

#### Firestore Backup

```bash
# Export Firestore data
gcloud firestore export gs://your-bucket-name/firestore-backup

# Schedule regular backups
gcloud scheduler jobs create app-engine firestore-backup \
    --schedule="0 2 * * *" \
    --time-zone="UTC" \
    --service=backup-service
```

### 11. Troubleshooting

#### Common Issues

1. **Build Errors**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

2. **Firebase Connection Issues**
   - Check environment variables
   - Verify Firebase config
   - Check network/firewall settings

3. **Google Cloud API Errors**
   - Verify APIs are enabled
   - Check service account permissions
   - Validate API keys

4. **3D Animation Performance**
   ```javascript
   // Optimize Three.js performance
   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
   ```

### 12. Maintenance

#### Regular Tasks

- **Weekly**: Check error logs
- **Monthly**: Update dependencies
- **Quarterly**: Security audit
- **Annually**: Review and optimize costs

#### Update Dependencies

```bash
# Check outdated packages
npm outdated

# Update packages
npm update

# Audit security
npm audit fix
```

## 🎉 Congratulations!

Your Drishti AI Platform is now deployed and ready for production use!

## 📞 Support

For deployment issues:
- 📧 Email: support@drishti.ai
- 💬 GitHub Issues: Create an issue in your repository
- 📖 Documentation: Check the main README.md

---

**Happy Deploying! 🚀**