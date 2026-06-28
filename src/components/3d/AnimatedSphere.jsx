import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";

const AnimatedSphere = () => {
  const sphereRef = useRef();

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.5;
    }
  });

  return (
    <mesh ref={sphereRef}>
      <icosahedronGeometry args={[1.5, 4]} />
      <meshStandardMaterial
        color="#00ff88"
        wireframe={true}
        emissive="#00ff88"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
};

export default AnimatedSphere;
