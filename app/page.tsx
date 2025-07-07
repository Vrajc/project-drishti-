'use client'

import React, { Suspense } from 'react'
import { Hero } from '@/components/landing/Hero'
import { Features } from '@/components/landing/Features'
import { TechStack } from '@/components/landing/TechStack'
import { UseCases } from '@/components/landing/UseCases'
import { CTA } from '@/components/landing/CTA'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Scene3D } from '@/components/3d/Scene3D'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section with 3D Elements */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100" />}>
            <Scene3D />
          </Suspense>
        </div>
        <Hero />
      </section>

      {/* Features Section */}
      <Features />

      {/* Use Cases Section */}
      <UseCases />

      {/* Technology Stack */}
      <TechStack />

      {/* Call to Action */}
      <CTA />

      <Footer />
    </div>
  )
}