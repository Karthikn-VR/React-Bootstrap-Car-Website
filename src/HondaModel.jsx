import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment,OrbitControls } from "@react-three/drei";
import  Honda from "./components/public/Honda.jsx";
import './App.css'


export default function HondaModel() {
  return (
    <div className="canvas-container">
      <Canvas>
                  <ambientLight intensity={2} />
                  <OrbitControls enableZoom={false}
                   maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
                  <Suspense fallback={null}>
                     
                    <Honda scale={1.7}position={[0, -1.6, -0.7]}/>
                   
                  </Suspense>
                  <Environment preset="sunset" />
                </Canvas>
    </div>
  );
}
