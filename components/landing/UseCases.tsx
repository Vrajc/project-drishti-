'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar,
  Building,
  Shield,
  Siren,
  MapPin,
  Plane,
  AlertCircle
} from 'lucide-react'

const useCases = [
  {
    icon: Calendar,
    title: 'Mass Public Events',
    description: 'Concerts, festivals, and large gatherings with intelligent crowd management',
    image: '/images/mass-events.jpg'
  },
  {
    icon: Building,
    title: 'Sports Stadiums & Tournaments',
    description: 'Real-time monitoring and safety management for sporting venues',
    image: '/images/sports-stadiums.jpg'
  },
  {
    icon: Shield,
    title: 'Government & Military Parades',
    description: 'High-security event monitoring with predictive threat analysis',
    image: '/images/parades.jpg'
  },
  {
    icon: Siren,
    title: 'Emergency Response Drills',
    description: 'Training and real emergency coordination with AI assistance',
    image: '/images/emergency.jpg'
  },
  {
    icon: MapPin,
    title: 'Pilgrimage Sites & Holy Gatherings',
    description: 'Managing religious gatherings and pilgrimage crowd flows safely',
    image: '/images/pilgrimage.jpg'
  },
  {
    icon: Plane,
    title: 'Metro Cities & Airports',
    description: 'Urban crowd management and transportation hub monitoring',
    image: '/images/airports.jpg'
  },
  {
    icon: AlertCircle,
    title: 'Protests & High-Risk Zones',
    description: 'Peaceful monitoring and de-escalation support for sensitive areas',
    image: '/images/protests.jpg'
  }
]

export const UseCases: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Versatile <span className="gradient-text">Applications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Drishti adapts to various scenarios, providing comprehensive situational awareness across different environments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                  <useCase.icon className="w-16 h-16 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600">
                    {useCase.description}
                  </p>
                </div>
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
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Secure Your Events?
            </h3>
            <p className="text-gray-600 mb-6">
              Join organizations worldwide using Drishti for intelligent crowd management and emergency response
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Schedule Demo
              </a>
              <a href="/solutions" className="btn-secondary">
                View Solutions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}