import React, { useState } from "react";
import { Canvas } from "react-three-fiber";
import Camera from "../Hooks/Camera";
import { OrbitControls, Stars } from "@react-three/drei";
import EarthSphere from "../PlanetsAndSatelites/EarthSphere";
import JupiterSphere from "../PlanetsAndSatelites/JupiterSphere";
import SaturnSphere from "../PlanetsAndSatelites/SaturnSphere";
import MarsSphere from "../PlanetsAndSatelites/MarsSphere";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu/Menu";
import Dropdown from "semantic-ui-react/dist/commonjs/modules/Dropdown";
import { planetObjectList } from "./Constants";
import styles from "./style/Scene.module.scss";

const dropdownOption = planetObjectList.filter(
  item =>
    item.value === "earth" ||
    item.value === "mars" ||
    item.value === "jupiter" ||
    item.value === "saturn"
);

const timeSpeedOptions = [
  { key: 1, value: 1, text: 1 },
  { key: 1000, value: 1000, text: 1000 },
  { key: 36000, value: 36000, text: 36000 },
  { key: 86400, value: 86400, text: 86400 }
];

const Scene = () => {
  const [timeSpeed, setTimeSpeed] = useState({
    key: 86400,
    value: 86400,
    text: 86400
  });
  const [currentLeftValue, setCurrentLeftValue] = useState(dropdownOption[0]);
  const [initTime] = useState(new Date());
  const [orbitVisible, setOrbitVisible] = useState(true);
  const [showNames, setShowNames] = useState(true);

  const handleDropdownChange = (e, data) => {
    let myObj = dropdownOption.find(item => item.value === data.value);
    setCurrentLeftValue(myObj);
  };

  const changeTimeSpeed = (_, data) => {
    let mySpeed = timeSpeedOptions.find(item => item.value === data.value);
    setTimeSpeed(mySpeed);
  };

  const providedProps = {
    initTime,
    orbitVisible,
    showNames,
    timeSpeed: timeSpeed.value
  };

  return (
    <div className="App">
      <Canvas>
        <Camera position={[0, 10, 30]} />
        <OrbitControls maxDistance={400} minDistance={10} />
        <ambientLight intensity={1} />
        {currentLeftValue.value === "earth" && (
          <EarthSphere {...providedProps} />
        )}
        {currentLeftValue.value === "jupiter" && (
          <JupiterSphere {...providedProps} />
        )}
        {currentLeftValue.value === "saturn" && (
          <SaturnSphere {...providedProps} />
        )}
        {currentLeftValue.value === "mars" && <MarsSphere {...providedProps} />}

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
            options={dropdownOption}
            className={styles.dd_in_html}
          />
          <Dropdown
            basic
            inverted={"true"}
            text={timeSpeed.text}
            value={timeSpeed.value}
            onChange={changeTimeSpeed}
            selection
            options={timeSpeedOptions}
            className={styles.dd_in_html}
          />
        </Menu>
      </div>
    </div>
  );
};

export default Scene;
