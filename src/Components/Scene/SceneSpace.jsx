import React, { useState } from "react";
import { Canvas } from "react-three-fiber";
import { Vector3 } from "three";
import SunSphere from "../SolarObjects/SunSphere";
import { OrbitControls, Html } from "@react-three/drei";
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
  const [showNames, setShowNames] = useState(false);
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
        <Html
          style={{
            height: "50px",
            top: "calc(-40vh)",
            left: "calc(-10vh)",
            width: "100px"
          }}
        >
          <div>
            <Menu borderless className={styles.gridStyle}>
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
          </div>
        </Html>
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
        <MercurySphere {...providedProps} />
        <VenusSphere {...providedProps} />
        <EarthSphere {...providedProps} />
        <MarsSphere {...providedProps} />
        <JupiterSphere {...providedProps} />
        <SaturnSphere {...providedProps} />
        <UranSphere {...providedProps} />
        <NeptuneSphere {...providedProps} />
      </Canvas>
    </div>
  );
};

export default Scene;
