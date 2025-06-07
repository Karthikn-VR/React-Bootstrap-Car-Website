import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment,OrbitControls } from "@react-three/drei";
import Porsche from "../public/Porsche.jsx";
import './App.css'


export default function PorscheModel() {
  return (
    <div className="alfa-container">
      <Canvas>
  <ambientLight intensity={7} />
  <directionalLight position={[5, 10, 5]} intensity={1.5} />
  <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
  <Suspense fallback={null}>
    <Porsche scale={1.3} position={[0, -0.3, -0.7]} />
  </Suspense>
  <Environment preset="sunset" />
</Canvas>

    </div>
  );
}
