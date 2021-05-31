import React, { useState } from "react";
import { Canvas } from "react-three-fiber";
import { Vector3 } from "three";
import SunSphere from "../SolarObjects/SunSphere";
import { OrbitControls, Html, Stars } from "@react-three/drei";
import Camera from "../Hooks/Camera";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu/Menu";
import Checkbox from "semantic-ui-react/dist/commonjs/modules/Checkbox/Checkbox";
import styles from "./style/Scene.module.scss";
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
  const [orbitVisible, setOrbitVisible] = useState(true);
  const [showNames, setShowNames] = useState(true);
  const [initTime] = useState(new Date());
  const timeSpeed = 36000;
  const xArrow = new Vector3(1, 0, 0);
  const yArrow = new Vector3(0, 1, 0);
  const zArrow = new Vector3(0, 0, 1);
  const xyzOrigin = new Vector3(0, 0, 0);

  const providedProps = {
    initTime,
    orbitVisible,
    showNames
  };

  return (
    <div className="App">
      <Canvas>
        <OrbitControls maxDistance={500} minDistance={3} />
        <Camera />
        <pointLight
          intensity={1}
          color="white"
          position={[0, 0, 0]}
          // castShadow={true}
        />
        <ambientLight
          dispose={true}
          intensity={0.03}
          color="white"
          position={[0, 0, 0]}
          radius={2}
          shadow
          physicallyCorrectLights
        />
        <arrowHelper args={[xArrow, xyzOrigin, 3]} />
        <arrowHelper args={[yArrow, xyzOrigin, 2]} />
        <arrowHelper args={[zArrow, xyzOrigin, 3]} />
        <SunSphere
          position={[0, 0, 0]}
          picture={sun}
          tiltedAxis={7.25}
          rotationPerHrs={timeSpeed / 672}
          timeSpeed={timeSpeed}
          name={"sun"}
        />
        <MercurySphere {...providedProps} />
        <VenusSphere {...providedProps} />
        <EarthSphere {...providedProps} />
        <MarsSphere {...providedProps} />
        <JupiterSphere {...providedProps} />
        <SaturnSphere {...providedProps} />
        <UranSphere {...providedProps} />
        <NeptuneSphere {...providedProps} />
        <Stars
          radius={460} // Radius of the inner sphere (default=100)
          depth={50} // Depth of area where stars should fit (default=50)
          count={2000} // Amount of stars (default=5000)
          factor={4} // Size factor (default=4)
          saturation={0.5} // Saturation 0-1 (default=0)
          fade
        />
      </Canvas>
      <Canvas
        style={{
          position: "absolute",
          top: "0",
          height: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Html
          style={{
            left: "calc(-10vw)"
          }}
        >
          <Menu borderless className={styles.gridStyleSpace}>
            <Menu.Item>
              <Checkbox
                checked={orbitVisible}
                onClick={() => setOrbitVisible(!orbitVisible)}
                label="Show orbits"
                className={styles.show_orbits_cb}
              />
            </Menu.Item>
            <Menu.Item>
              <Checkbox
                checked={showNames}
                onClick={() => setShowNames(!showNames)}
                label="Show planet names"
                className={styles.show_orbits_cb}
              />
            </Menu.Item>
          </Menu>
        </Html>
      </Canvas>
    </div>
  );
};

export default Scene;
