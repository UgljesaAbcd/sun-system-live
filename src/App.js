import React from "react";

import "./App.css";
import { Canvas } from "react-three-fiber";
import Sphere from "./Components/SolarObjects/Sphere";
import { OrbitControls, Stars } from "@react-three/drei";
import earth from "./Components/Textures/earth2.jpg";
import sun from "./Components/Textures/sun.jpg";
import mars from "./Components/Textures/mars.jpg";
import mercury from "./Components/Textures/mercury.png";
import jupiter from "./Components/Textures/jupiter.jpg";
import pluto from "./Components/Textures/pluto.jpg";
import uran from "./Components/Textures/uranus.jpg";
import venus from "./Components/Textures/venus.png";
import neptune from "./Components/Textures/neptune.jpg";
import saturn from "./Components/Textures/saturn.jpg";

function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[30, 30, 35]} angle={0.3} />
        <Sphere position={[0, 0, 0]} picture={sun} tiltedAxis={7.25} />
        <Sphere position={[0, 0, 3]} picture={mercury} tiltedAxis={0.03} />
        <Sphere position={[0, 0, 6]} picture={venus} tiltedAxis={2.64} />
        <Sphere position={[0, 0, 9]} picture={earth} tiltedAxis={23.4} />
        <Sphere position={[0, 0, 12]} picture={mars} tiltedAxis={25.19} />
        <Sphere position={[0, 0, 15]} picture={jupiter} tiltedAxis={3.13} />
        <Sphere position={[0, 0, 18]} picture={saturn} tiltedAxis={26.73} />
        <Sphere position={[0, 0, 21]} picture={uran} tiltedAxis={82.23} />
        <Sphere position={[0, 0, 24]} picture={neptune} tiltedAxis={28.32} />
        <Sphere position={[0, 0, 27]} picture={pluto} tiltedAxis={57.47} />

        <Stars />
      </Canvas>
    </div>
  );
}

export default App;
