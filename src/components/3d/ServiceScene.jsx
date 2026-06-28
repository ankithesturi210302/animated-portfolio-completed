import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import Card3D from "./Card3D";

const ServiceScene = ({ height = 400 }) => {
  const colors = ["#ff6b35", "#00d4ff", "#00ff88", "#ffd700"];
  const positions = [
    [-3, 0, 0],
    [-1, 0, 0],
    [1, 0, 0],
    [3, 0, 0],
  ];

  return (
    <Canvas
      style={{
        width: "100%",
        height: `${height}px`,
        background: "transparent",
      }}
    >
      <PerspectiveCamera position={[0, 0, 8]} fov={50} />
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 10, 5]} intensity={1.5} />
      <pointLight position={[-5, -10, 5]} intensity={0.8} color="#00d4ff" />

      {colors.map((color, i) => (
        <Card3D key={i} position={positions[i]} color={color} />
      ))}

      <OrbitControls
        autoRotate
        autoRotateSpeed={1}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
};

export default ServiceScene;
