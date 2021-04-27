import React from "react";
import { Canvas } from "react-three-fiber";
import { Vector3 } from "three";
import SunSphere from "../SolarObjects/SunSphere";
import { OrbitControls } from "@react-three/drei";
import sun from "../../Components/Textures/sun.jpg";
import MercurySphere from "../SolarObjects/MercurySphere";
import VenusSphere from "../SolarObjects/VenusSphere";
import EarthSphere from "../SolarObjects/EarthSphere";
import MarsSphere from "../SolarObjects/MarsSphere";
import JupiterSphere from "../SolarObjects/JupiterSphere";
import SaturnSphere from "../SolarObjects/SaturnSphere";
import UranSphere from "../SolarObjects/UranSphere";
import NeptuneSphere from "../SolarObjects/NeptuneSphere";

const Scene = () => {
  const timeSpeed = 36000;
  const initTile = new Date();
  const xArrow = new Vector3(1, 0, 0);
  const yArrow = new Vector3(0, 1, 0);
  const zArrow = new Vector3(0, 0, 1);
  const xyzOrigin = new Vector3(0, 0, 0);
  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        <pointLight intensity={1} color="white" position={[0, 0, 0]} />
        <ambientLight
          dispose={true}
          intensity={0.03}
          color="white"
          position={[0, 0, 0]}
          radius={2}
          shadow
          physicallyCorrectLights
        />
        <arrowHelper args={[xArrow]} />
        <arrowHelper args={[yArrow]} />
        <arrowHelper args={[zArrow, xyzOrigin, 3]} />
        <SunSphere
          position={[0, 0, 0]}
          picture={sun}
          tiltedAxis={7.25}
          rotationPerHrs={timeSpeed / 672}
          timeSpeed={timeSpeed}
          name={"sun"}
        />
        <MercurySphere initTime={initTile} />
        <VenusSphere initTime={initTile} />
        <EarthSphere initTime={initTile} />
        <MarsSphere initTime={initTile} />
        <JupiterSphere initTime={initTile} />
        <SaturnSphere initTime={initTile} />
        <UranSphere initTime={initTile} />
        <NeptuneSphere initTime={initTile} />
      </Canvas>
    </div>
  );
};

export default Scene;
