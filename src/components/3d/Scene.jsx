import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import RotatingBox from "./RotatingBox";
import FloatingParticles from "./FloatingParticles";

const Scene = ({ height = 500 }) => {
  return (
    <Canvas
      style={{
        width: "100%",
        height: `${height}px`,
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      }}
    >
      <PerspectiveCamera position={[0, 0, 5]} fov={75} />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
      
      <RotatingBox />
      <FloatingParticles />
      
      <OrbitControls
        autoRotate
        autoRotateSpeed={4}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
};

export default Scene;
