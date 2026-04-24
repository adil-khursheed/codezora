"use client";

import { Canvas } from "@react-three/fiber";

const HeroCanvas = () => {
  return (
    <Canvas>
      <CanvasGeometry />
    </Canvas>
  );
};

export default HeroCanvas;

function CanvasGeometry() {
  return (
    <mesh>
      <boxGeometry />
      <meshBasicMaterial color="red" />
    </mesh>
  );
}
