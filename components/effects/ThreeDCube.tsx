'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Edges, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // 자동 회전
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.3;
    
    // 호버시 빠른 회전
    if (hovered) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
    }

    // 부드러운 플로팅 효과
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Box
        ref={meshRef}
        args={[2, 2, 2]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={hovered ? "#BD93F9" : "#00D9FF"}
          wireframe
          transparent
          opacity={0.8}
          distort={0.4}
          speed={2}
          emissive={hovered ? "#BD93F9" : "#00D9FF"}
          emissiveIntensity={0.5}
        />
        <Edges
          scale={1.1}
          threshold={15}
          color={hovered ? "#50FA7B" : "#BD93F9"}
        />
      </Box>
    </Float>
  );
}

function InnerCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // 반대 방향 회전
    meshRef.current.rotation.x -= delta * 0.8;
    meshRef.current.rotation.y -= delta * 0.6;
    meshRef.current.rotation.z += delta * 0.4;
  });

  return (
    <Box ref={meshRef} args={[1, 1, 1]}>
      <meshBasicMaterial
        color="#50FA7B"
        wireframe
        transparent
        opacity={0.3}
      />
    </Box>
  );
}

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const particlesCount = 500;
  
  const positions = new Float32Array(particlesCount * 3);
  const colors = new Float32Array(particlesCount * 3);
  
  for (let i = 0; i < particlesCount; i++) {
    const i3 = i * 3;
    
    // 랜덤 위치
    positions[i3] = (Math.random() - 0.5) * 10;
    positions[i3 + 1] = (Math.random() - 0.5) * 10;
    positions[i3 + 2] = (Math.random() - 0.5) * 10;
    
    // 랜덤 색상 (네온 팔레트)
    const colorChoice = Math.random();
    if (colorChoice < 0.33) {
      colors[i3] = 0;
      colors[i3 + 1] = 0.85;
      colors[i3 + 2] = 1;
    } else if (colorChoice < 0.66) {
      colors[i3] = 0.74;
      colors[i3 + 1] = 0.58;
      colors[i3 + 2] = 0.98;
    } else {
      colors[i3] = 0.31;
      colors[i3 + 1] = 0.98;
      colors[i3 + 2] = 0.48;
    }
  }

  useFrame((state) => {
    if (!points.current) return;
    
    // 파티클 회전
    points.current.rotation.x = state.clock.elapsedTime * 0.05;
    points.current.rotation.y = state.clock.elapsedTime * 0.08;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function ThreeDCube() {
  return (
    <div className="w-[400px] h-[400px] relative">
      <div className="absolute inset-0 bg-gradient-radial from-neon-cyan/20 via-transparent to-transparent" />
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00D9FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#BD93F9" />
        
        <RotatingCube />
        <InnerCube />
        <ParticleField />
      </Canvas>
    </div>
  );
}