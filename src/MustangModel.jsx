import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment,OrbitControls } from "@react-three/drei";
import Mustang from "./components/public/Mustang.jsx";
import { Group } from 'three';
import './App.css';


export default function MustangModel(){
    return(
      <div className='mustang-container'>
          <Canvas>
            <ambientLight intensity={2} />
            <OrbitControls enableZoom={false} enablePan={false}
             maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
            <Suspense fallback={null}>
               
              <Mustang position={[0, -1, -0.2]}/>
             
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
          </div>
 );

}