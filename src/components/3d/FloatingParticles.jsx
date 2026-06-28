import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const FloatingParticles = () => {
  const particlesRef = useRef();

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.0003;
      particlesRef.current.rotation.y += 0.0005;
    }
  });

  const particleCount = 100;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ],
    });
  }

  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
};

export default FloatingParticles;
