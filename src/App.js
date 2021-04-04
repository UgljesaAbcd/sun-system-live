import React from "react";

import "./App.css";
import { Canvas } from "react-three-fiber";
import Sphere from "./Components/SolarObjects/Sphere";
import { OrbitControls, Stars } from "@react-three/drei";
import earth from "./Components/Textures/earth.jpg";
import sun from "./Components/Textures/sun.jpg";
import mars from "./Components/Textures/mars.jpg";

function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[30, 30, 35]} angle={0.3} />
        <Sphere position={[0, 0, 0]} picture={sun} />
        <Sphere
          position={[5, 0, 5]}
          eulerOfSphere={{ x: 0, y: 0.3, z: 0 }}
          picture={earth}
        />
        <Sphere position={[0, 0, 12]} picture={mars} />
        <Stars />
      </Canvas>
    </div>
  );
}

export default App;
