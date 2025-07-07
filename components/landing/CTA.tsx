'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const CTA: React.FC = () => {
  const benefits = [
    'Free 30-day trial',
    'No setup fees',
    '24/7 support',
    'Instant deployment'
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <br />
            Event Security?
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join leading organizations using Drishti for intelligent crowd management. 
            Get started today and see the difference AI can make.
          </p>

          <div className="flex flex-wrap justify-center gap-6 my-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 text-white/90"
              >
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/auth/register" 
              className="bg-white text-primary-600 font-medium py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 active:scale-95 inline-flex items-center justify-center group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="/contact" 
              className="border-2 border-white text-white font-medium py-4 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              Contact Sales
            </Link>
          </div>

          <p className="text-white/70 text-sm">
            No credit card required • 5-minute setup • Enterprise-ready
          </p>
        </motion.div>
      </div>
    </section>
  )
}