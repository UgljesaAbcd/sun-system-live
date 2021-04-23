import React from "react";
import { Canvas } from "react-three-fiber";
import SunSphere from "../SolarObjects/SunSphere";
import Sphere from "../SolarObjects/Sphere";
import { OrbitControls } from "@react-three/drei";
import earth from "../../Components/Textures/earth2.jpg";
import sun from "../../Components/Textures/sun.jpg";
import mars from "../../Components/Textures/mars.jpg";
import mercury from "../../Components/Textures/mercury.png";
import jupiter from "../../Components/Textures/jupiter.jpg";
import uran from "../../Components/Textures/uranus.jpg";
import venus from "../../Components/Textures/venus.png";
import neptune from "../../Components/Textures/neptune.jpg";
import saturn from "../../Components/Textures/saturn.jpg";

const Scene = () => {
  const timeSpeed = 36000;
  const initTile = new Date();
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
        <SunSphere
          position={[0, 0, 0]}
          picture={sun}
          tiltedAxis={7.25}
          rotationPerHrs={timeSpeed / 672}
          orbitalSpeedKmPerHrs={0}
          revolutionInDays={0}
          initTile={initTile}
          timeSpeed={timeSpeed}
          name={"sun"}
        />
        <Sphere
          position={[5, 0, 5]}
          picture={mercury}
          tiltedAxis={0.03}
          rotationPerHrs={timeSpeed / 1407.5}
          orbitalSpeedKmPerHrs={timeSpeed / 172192.209}
          revolutionInDays={88}
          initTile={initTile}
          timeSpeed={timeSpeed}
          name={"mercury"}
        />
        <Sphere
          position={[10, 0, 10]}
          picture={venus}
          tiltedAxis={177.3}
          rotationPerHrs={timeSpeed / 5832}
          orbitalSpeedKmPerHrs={timeSpeed / 126011.627}
          revolutionInDays={224.7}
          initTile={initTile}
          timeSpeed={timeSpeed}
          name={"venus"}
        />
        <Sphere
          position={[14, 0, 14]}
          picture={earth}
          tiltedAxis={23.4}
          rotationPerHrs={timeSpeed / 24}
          orbitalSpeedKmPerHrs={timeSpeed / 107159.412}
          revolutionInDays={365.3}
          initTile={initTile}
          timeSpeed={timeSpeed}
          name={"earth"}
        />
        <Sphere
          position={[22, 0, 22]}
          picture={mars}
          tiltedAxis={25.19}
          rotationPerHrs={timeSpeed / 24.623}
          orbitalSpeedKmPerHrs={timeSpeed / 90787.087}
          revolutionInDays={656.98}
          initTile={initTile}
          timeSpeed={timeSpeed}
          name={"mars"}
        />
        <Sphere
          position={[77, 0, 77]}
          picture={jupiter}
          tiltedAxis={3.13}
          rotationPerHrs={timeSpeed / 9.925}
          orbitalSpeedKmPerHrs={timeSpeed / 47047.945}
          revolutionInDays={4328.9}
          initTile={initTile}
          timeSpeed={timeSpeed}
          name={"jupiter"}
        />
        <Sphere
          position={[142, 0, 142]}
          picture={saturn}
          tiltedAxis={26.73}
          rotationPerHrs={timeSpeed / 10.656}
          orbitalSpeedKmPerHrs={timeSpeed / 34729.032}
          revolutionInDays={10749.25}
          timeSpeed={timeSpeed}
          initTile={initTile}
          name={"saturn"}
        />
        <Sphere
          position={[287, 0, 287]}
          picture={uran}
          tiltedAxis={82.23}
          rotationPerHrs={timeSpeed / 17.24}
          orbitalSpeedKmPerHrs={timeSpeed / 24493.138}
          revolutionInDays={30668}
          timeSpeed={timeSpeed}
          initTile={initTile}
          name={"uran"}
        />
        <Sphere
          position={[449, 0, 449]}
          picture={neptune}
          tiltedAxis={28.32}
          rotationPerHrs={timeSpeed / 16.11}
          orbitalSpeedKmPerHrs={timeSpeed / 19569.084}
          revolutionInDays={60150}
          timeSpeed={timeSpeed}
          initTile={initTile}
          name={"neptune"}
        />
      </Canvas>
    </div>
  );
};

export default Scene;
