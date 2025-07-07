import './globals.css'
import type { Metadata } from 'next'
import React from 'react'
import { AuthProvider } from '@/components/providers/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Drishti - AI-Powered Situational Awareness Platform',
  description: 'Advanced situational awareness platform for crowd management, emergency response, and public safety using Google AI technologies.',
  keywords: 'AI, crowd management, situational awareness, public safety, emergency response, Google AI, Vertex AI',
  authors: [{ name: 'Drishti Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  )
}