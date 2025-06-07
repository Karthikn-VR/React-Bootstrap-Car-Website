import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment,OrbitControls } from "@react-three/drei";
import  Rafato from "./components/public/Rafato.jsx";



export default function RafatoModel() {
  return (
    <div className="rafato-container">
      <Canvas>
                  <ambientLight intensity={2} />
                  <OrbitControls enableZoom={false}
                   maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
                  <Suspense fallback={null}>
                     
                    <Rafato scale={0.7} position={[0, -0.5, -0.2]}/>
                   
                  </Suspense>
                  <Environment preset="sunset" />
                </Canvas>
    </div>
  );
}
