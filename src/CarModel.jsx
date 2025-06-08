import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment,OrbitControls } from "@react-three/drei";
import Car from "./Models/Car";



export default function CarModel() {
  return (
    <div className="canvas-container">
      <Canvas>
                  <ambientLight intensity={2} />
                  <OrbitControls enableZoom={false}
                   maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
                  <Suspense fallback={null}>
                     
                    <Car scale={3} position={[0, -1, -0.7]}/>
                   
                  </Suspense>
                  <Environment preset="sunset" />
                </Canvas>
    </div>
  );
}
