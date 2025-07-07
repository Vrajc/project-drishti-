'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Box, Cylinder, Float, Environment } from '@react-three/drei'
import * as THREE from 'three'

const FloatingGeometry: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2
    }
  })

  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color('#0ea5e9'),
    metalness: 0.1,
    roughness: 0.3,
    transparent: true,
    opacity: 0.8
  }), [])

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Box ref={meshRef} position={position} args={[1, 1, 1]} material={material} />
    </Float>
  )
}

const AnimatedSphere: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const sphereRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })

  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color('#ff5a1f'),
    metalness: 0.2,
    roughness: 0.4,
    transparent: true,
    opacity: 0.7
  }), [])

  return (
    <Sphere ref={sphereRef} position={position} args={[0.8, 32, 32]} material={material} />
  )
}

const NetworkNode: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const cylinderRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (cylinderRef.current) {
      cylinderRef.current.rotation.z = state.clock.elapsedTime * 0.5
    }
  })

  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color('#64748b'),
    metalness: 0.3,
    roughness: 0.2,
    transparent: true,
    opacity: 0.6
  }), [])

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Cylinder ref={cylinderRef} position={position} args={[0.3, 0.3, 1.5, 8]} material={material} />
    </Float>
  )
}

export const Scene3D: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#0ea5e9" intensity={0.5} />
        
        {/* Floating geometric shapes */}
        <FloatingGeometry position={[-4, 2, 0]} />
        <FloatingGeometry position={[4, -2, -2]} />
        <AnimatedSphere position={[2, 3, 1]} />
        <AnimatedSphere position={[-3, -1, 2]} />
        <NetworkNode position={[0, -3, 0]} />
        <NetworkNode position={[5, 1, -1]} />
        <NetworkNode position={[-5, 0, 1]} />
        
        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}