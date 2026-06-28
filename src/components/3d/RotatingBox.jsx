import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const RotatingBox = () => {
  const boxRef = useRef();

  useFrame((state) => {
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.005;
      boxRef.current.rotation.y += 0.008;
    }
  });

  return (
    <mesh ref={boxRef} scale={2}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#ff6b35"
        metalness={0.5}
        roughness={0.3}
        emissive="#ff6b35"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

export default RotatingBox;
