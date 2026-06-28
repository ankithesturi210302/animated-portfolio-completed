import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Card3D = ({ position = [0, 0, 0], color = "#ff6b35" }) => {
  const cardRef = useRef();

  useFrame((state) => {
    if (cardRef.current) {
      cardRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      cardRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.4) * 0.3;
      cardRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <group ref={cardRef} position={position}>
      <mesh>
        <boxGeometry args={[2, 2.5, 0.2]} />
        <meshStandardMaterial
          color={color}
          metalness={0.4}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
      <mesh position={[0, 0, 0.11]}>
        <boxGeometry args={[1.9, 2.4, 0.01]} />
        <meshStandardMaterial
          color="#000000"
          metalness={0.3}
          roughness={0.8}
        />
      </mesh>
    </group>
  );
};

export default Card3D;
