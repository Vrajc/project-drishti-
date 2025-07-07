'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  MessageSquare, 
  Navigation, 
  AlertTriangle, 
  MapPin, 
  Search, 
  FileText,
  Eye
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Predictive Bottleneck Analysis',
    description: 'AI-powered crowd flow prediction using Vertex AI Vision and forecasting models to prevent stampedes 15-20 minutes in advance.',
    tech: ['Vertex AI Vision', 'YOLOv8', 'LSTM', 'DeepSORT']
  },
  {
    icon: MessageSquare,
    title: 'AI-Powered Situational Summaries',
    description: 'Natural language queries with Gemini Pro to get instant situational updates from video feeds, reports, and social media.',
    tech: ['Gemini Pro', 'Agent Builder', 'NLP Processing']
  },
  {
    icon: Navigation,
    title: 'Intelligent Resource Dispatch',
    description: 'Automated emergency response with optimal routing using Google Maps Platform and AI decision-making.',
    tech: ['Maps Platform', 'Firebase', 'K-NN Algorithm', 'A* Pathfinding']
  },
  {
    icon: AlertTriangle,
    title: 'Multimodal Anomaly Detection',
    description: 'Detect fires, smoke, panic, and abnormal movements using advanced computer vision and multimodal AI.',
    tech: ['Gemini Multimodal', 'CNN', 'Optical Flow', 'Edge IoT']
  },
  {
    icon: MapPin,
    title: 'Smart Event Safety Planning',
    description: 'Pre-event AI analysis for optimal placement of security, cameras, and emergency exits based on crowd predictions.',
    tech: ['Predictive Analytics', 'Spatial Analysis', 'Risk Assessment']
  },
  {
    icon: Search,
    title: 'AI-Powered Lost & Found',
    description: 'Facial recognition search across video feeds to locate missing persons during large events.',
    tech: ['Computer Vision', 'Facial Recognition', 'Real-time Search']
  },
  {
    icon: FileText,
    title: 'Incident Records & Legal Proof',
    description: 'Automated documentation and evidence collection for legal proceedings and post-event analysis.',
    tech: ['Blockchain Storage', 'Audit Trails', 'Compliance Systems']
  },
  {
    icon: Eye,
    title: 'Real-time Monitoring Dashboard',
    description: 'Comprehensive command center with live feeds, AI insights, and emergency response coordination.',
    tech: ['Real-time Analytics', 'WebSocket', 'Data Visualization']
  }
]

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="gradient-text">AI Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced situational awareness powered by Google's cutting-edge AI technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-accent-100 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {feature.description}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {feature.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="/features" className="btn-primary">
            Explore All Features
          </a>
        </motion.div>
      </div>
    </section>
  )
}