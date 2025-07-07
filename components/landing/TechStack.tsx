'use client'

import React from 'react'
import { motion } from 'framer-motion'

const technologies = [
  {
    category: 'AI & Machine Learning',
    tools: [
      {
        name: 'Vertex AI',
        description: 'Unified ML platform for vision and forecasting',
        icon: '🧠'
      },
      {
        name: 'Gemini Pro',
        description: 'Advanced multimodal AI for natural language processing',
        icon: '✨'
      },
      {
        name: 'Agent Builder',
        description: 'Conversational AI for situational queries',
        icon: '🤖'
      }
    ]
  },
  {
    category: 'Cloud & Backend',
    tools: [
      {
        name: 'Firebase',
        description: 'Real-time database and authentication',
        icon: '🔥'
      },
      {
        name: 'Cloud Functions',
        description: 'Serverless compute for AI processing',
        icon: '⚡'
      },
      {
        name: 'Firestore',
        description: 'NoSQL database for incident records',
        icon: '📊'
      }
    ]
  },
  {
    category: 'Maps & Location',
    tools: [
      {
        name: 'Maps Platform',
        description: 'Real-time routing and geospatial analysis',
        icon: '🗺️'
      },
      {
        name: 'Places API',
        description: 'Location intelligence and geocoding',
        icon: '📍'
      },
      {
        name: 'Routes API',
        description: 'Optimal emergency response routing',
        icon: '🛣️'
      }
    ]
  },
  {
    category: 'Analytics & Vision',
    tools: [
      {
        name: 'Vision AI',
        description: 'Object detection and crowd analysis',
        icon: '👁️'
      },
      {
        name: 'Video Intelligence',
        description: 'Automated video content analysis',
        icon: '🎥'
      },
      {
        name: 'AutoML',
        description: 'Custom models for anomaly detection',
        icon: '🎯'
      }
    ]
  }
]

export const TechStack: React.FC = () => {
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
            Powered by <span className="gradient-text">Google AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on Google's world-class AI and cloud infrastructure for unparalleled reliability and performance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 border-b border-primary-200 pb-2">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (toolIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-lg p-4 hover:bg-primary-50 transition-colors group"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{tool.icon}</span>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                          {tool.name}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Security & Compliance
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Built on Google Cloud's secure infrastructure with SOC 2, ISO 27001, and GDPR compliance
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <span>🔒 End-to-End Encryption</span>
              <span>📋 GDPR Compliant</span>
              <span>🛡️ ISO 27001 Certified</span>
              <span>⚡ 99.9% Uptime SLA</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}