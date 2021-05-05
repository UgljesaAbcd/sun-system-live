import React, { useState } from "react";
import { Canvas } from "react-three-fiber";
import Camera from "../Hooks/Camera";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import EarthSphere from "../PlanetsAndSatelites/EarthSphere";
import JupiterSphere from "../PlanetsAndSatelites/JupiterSphere";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu/Menu";
import Dropdown from "semantic-ui-react/dist/commonjs/modules/Dropdown";
import { planetObjectList } from "./Constants";
import styles from "./style/Scene.module.scss";

const Scene = () => {
  const timeSpeed = 36000;

  const [currentLeftValue, setCurrentLeftValue] = useState(planetObjectList[3]);
  const [initTime] = useState(new Date());
  const [orbitVisible, setOrbitVisible] = useState(true);
  const [showNames, setShowNames] = useState(true);

  const handleDropdownChange = (e, data) => {
    let myObj = planetObjectList.find(item => item.value === data.value);
    setCurrentLeftValue(myObj);
  };

  const providedProps = {
    initTime,
    orbitVisible,
    showNames
  };

  return (
    <div className="App">
      <Canvas>
        <Camera position={[0, 10, 30]} />
        <OrbitControls maxDistance={300} minDistance={10} />
        <ambientLight intensity={1} />
        {currentLeftValue.value === "earth" && (
          <EarthSphere {...providedProps} />
        )}
        {currentLeftValue.value === "jupiter" && (
          <JupiterSphere {...providedProps} />
        )}

        <Stars
          radius={200} // Radius of the inner sphere (default=100)
          depth={50} // Depth of area where stars should fit (default=50)
          count={2000} // Amount of stars (default=5000)
          factor={2} // Size factor (default=4)
          saturation={0} // Saturation 0-1 (default=0)
          fade
        />
      </Canvas>
      <div className={styles.main_html_element}>
        <Menu borderless className={styles.grid_menu}>
          <Dropdown
            basic
            inverted={"true"}
            text={currentLeftValue.text}
            value={currentLeftValue.value}
            onChange={handleDropdownChange}
            selection
            options={planetObjectList}
            className={styles.dd_in_html}
          />
        </Menu>
      </div>
    </div>
  );
};

export default Scene;
