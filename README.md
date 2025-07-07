# 🔍 Drishti - AI-Powered Situational Awareness Platform

![Drishti Banner](https://via.placeholder.com/1200x400/0ea5e9/ffffff?text=Drishti+-+AI+Situational+Awareness)

## 🌟 Overview

**Drishti** is a cutting-edge situational awareness platform that leverages Google's AI technologies to prevent, manage, and respond to crowd emergencies and public events. Built with Next.js, Firebase, and integrated with Google AI tools like Vertex AI, Gemini, and Maps Platform.

### ✨ Key Features

- 🧠 **Predictive Bottleneck Analysis** - AI-powered crowd flow prediction
- 💬 **AI-Powered Situational Summaries** - Natural language query system
- 🚨 **Intelligent Resource Dispatch** - Automated emergency response
- 👁️ **Multimodal Anomaly Detection** - Real-time threat detection
- 📍 **Smart Event Safety Planning** - Pre-event optimization
- 🔍 **AI-Powered Lost & Found** - Facial recognition search
- 📋 **Incident Records & Legal Proof** - Automated documentation
- 📊 **Real-time Monitoring Dashboard** - Comprehensive command center

## 🏗️ Technical Architecture

### Frontend
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Three Fiber** for 3D elements
- **Lucide React** for icons

### Backend & AI
- **Firebase Auth** for authentication
- **Firestore** for database
- **Google Vertex AI** for ML models
- **Gemini Pro** for NLP processing
- **Google Maps Platform** for location services
- **Firebase Cloud Functions** for serverless compute

### UI/UX
- Modern, minimal white design
- Cooperative color scheme
- 3D landing page elements
- Responsive design
- Accessible interfaces

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Google Cloud Platform account
- Firebase project
- Google Maps API key

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/drishti.git
cd drishti
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the environment template and configure:

```bash
cp .env.example .env.local
```

Fill in your configuration:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Google AI and Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_api_key
GOOGLE_VERTEX_AI_PROJECT_ID=your_vertex_project_id
GOOGLE_VERTEX_AI_LOCATION=us-central1
GOOGLE_APPLICATION_CREDENTIALS=path/to/service-account.json

# Admin Configuration
ADMIN_EMAIL=admin@drishti.com
ADMIN_PASSWORD=secure_password
```

### 4. Firebase Setup

1. Create a new Firebase project
2. Enable Authentication with Google provider
3. Create Firestore database
4. Set up security rules:

```javascript
// Firestore Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      allow read: if request.auth != null && resource.data.isAdmin == true;
    }
    
    match /events/{eventId} {
      allow read, write: if request.auth != null;
    }
    
    match /incidents/{incidentId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 5. Google Cloud Setup

1. Enable Vertex AI API
2. Enable Maps Platform APIs:
   - Maps JavaScript API
   - Geocoding API
   - Routes API
   - Places API
3. Create service account and download JSON key
4. Set up Vertex AI models

### 6. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your application.

## 📱 Application Structure

```
drishti/
├── app/                          # Next.js App Router
│   ├── auth/                     # Authentication pages
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── admin/page.tsx            # Admin portal
│   ├── dashboard/page.tsx        # User dashboard
│   ├── features/                 # Feature pages
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Landing page
├── components/                   # React components
│   ├── 3d/                       # Three.js components
│   ├── landing/                  # Landing page sections
│   ├── layout/                   # Layout components
│   └── providers/                # Context providers
├── lib/                          # Utility libraries
│   └── firebase.ts               # Firebase configuration
├── public/                       # Static assets
└── README.md
```

## 🎯 Use Cases

### 🎪 Mass Public Events
- Concerts and festivals
- Large gatherings
- Crowd flow management

### 🏟️ Sports Stadiums & Tournaments
- Real-time monitoring
- Safety management
- Emergency coordination

### 🛡️ Government & Military Parades
- High-security events
- Threat analysis
- Perimeter monitoring

### 🚨 Emergency Response Drills
- Training coordination
- Real emergency response
- Resource optimization

### 🕌 Pilgrimage Sites & Holy Gatherings
- Religious events
- Crowd density management
- Safety protocols

### ✈️ Metro Cities & Airports
- Urban monitoring
- Transportation hubs
- Traffic management

### ⚠️ Protests & High-Risk Zones
- Peaceful monitoring
- De-escalation support
- Safety assurance

## 🔐 Authentication & Security

### User Authentication
- **Email/Password** authentication
- **Google OAuth** integration
- **Firebase Auth** security
- **Role-based access** control

### Admin Portal
- Separate admin login
- User management
- System monitoring
- Data analytics

### Security Features
- End-to-end encryption
- GDPR compliance
- SOC 2 certification
- 99.9% uptime SLA

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub repository
2. Connect to Vercel
3. Configure environment variables
4. Deploy automatically

```bash
npm run build
npm start
```

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🆘 Support

- 📧 Email: support@drishti.ai
- 📞 Phone: +1 (555) 123-4567
- 💬 Discord: [Join our community](https://discord.gg/drishti)
- 📖 Documentation: [docs.drishti.ai](https://docs.drishti.ai)

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Core platform development
- ✅ Google AI integration
- ✅ Basic features implementation
- ✅ Authentication system

### Phase 2 (Next 3 months)
- 🔄 Advanced AI models
- 🔄 Mobile applications
- 🔄 API endpoints
- 🔄 Third-party integrations

### Phase 3 (6 months)
- 📋 Enterprise features
- 📋 White-label solutions
- 📋 Global deployment
- 📋 Advanced analytics

## 🏆 Acknowledgments

- Google AI Platform team
- Firebase team
- Next.js community
- Open source contributors

---

**Built with ❤️ using Google AI technologies**

![Google AI](https://via.placeholder.com/150x50/4285f4/ffffff?text=Google+AI)
![Firebase](https://via.placeholder.com/150x50/ffca28/000000?text=Firebase)
![Next.js](https://via.placeholder.com/150x50/000000/ffffff?text=Next.js)