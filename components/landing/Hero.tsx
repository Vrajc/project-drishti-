'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Eye, Brain } from 'lucide-react'

export const Hero: React.FC = () => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          <span className="gradient-text">AI-Powered</span>
          <br />
          <span className="text-gray-900">Situational</span>
          <br />
          <span className="text-gray-900">Awareness</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          Prevent, manage, and respond to crowd emergencies with Google AI. 
          Predictive analytics, real-time monitoring, and intelligent resource dispatch.
        </motion.p>

        {/* Key Features Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-100">
            <Brain className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-gray-700">Predictive Analytics</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-100">
            <Eye className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-gray-700">Real-time Monitoring</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-100">
            <Shield className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-gray-700">Emergency Response</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link href="/auth/register" className="btn-primary group inline-flex items-center">
            Get Started Free
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/demo" className="btn-secondary">
            Watch Demo
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="pt-8"
        >
          <p className="text-sm text-gray-500 mb-4">Powered by Google AI Technologies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-semibold text-gray-700">Vertex AI</div>
            <div className="text-lg font-semibold text-gray-700">Gemini Pro</div>
            <div className="text-lg font-semibold text-gray-700">Firebase</div>
            <div className="text-lg font-semibold text-gray-700">Maps Platform</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Action Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}