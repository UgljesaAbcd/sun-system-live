import React, { useState } from "react";
import { Canvas } from "react-three-fiber";
import Camera from "../Hooks/Camera";
import Sphere from "../SolarObjects/SphereComparison";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu/Menu";
import Dropdown from "semantic-ui-react/dist/commonjs/modules/Dropdown";
import { planetObjectList } from "./Constants";
import styles from "./style/Scene.module.scss";

const Scene = () => {
  const timeSpeed = 36000;

  const getSphereObject = (nameOfObject, side) => {
    let myObj = planetObjectList.find(item => item.value === nameOfObject);
    let xPosition = side === "right" ? myObj.radius + 2 : -myObj.radius - 2;
    return (
      <Sphere
        position={[xPosition, 0, 0]}
        picture={myObj.picture}
        tiltedAxis={myObj.tiltedAxis}
        rotationPerHrs={timeSpeed / myObj.rotationSpeed}
        radius={myObj.radius}
      />
    );
  };

  const [leftActiveObj, setLeftActiveObj] = useState(
    getSphereObject("earth", "left")
  );
  const [rightActiveObj, setRightActiveObj] = useState(
    getSphereObject("mars", "right")
  );
  const [currentLeftValue, setCurrentLeftValue] = useState(planetObjectList[3]);
  const [currentRightValue, setCurrentRightValue] = useState(
    planetObjectList[4]
  );

  const handleDropdownChange = (e, data) => {
    let myObj = planetObjectList.find(item => item.value === data.value);
    if (data.name === "left") {
      setCurrentLeftValue(myObj);
      setLeftActiveObj(getSphereObject(myObj.value, "left"));
    } else {
      setCurrentRightValue(myObj);
      setRightActiveObj(getSphereObject(myObj.value, "right"));
    }
  };

  return (
    <div className="App">
      <Canvas>
        <Camera position={[0, 0, 14]} />
        <OrbitControls maxDistance={300} minDistance={10} />
        <ambientLight intensity={1} />
        {leftActiveObj}
        {rightActiveObj}
        <Stars
          radius={100} // Radius of the inner sphere (default=100)
          depth={50} // Depth of area where stars should fit (default=50)
          count={2000} // Amount of stars (default=5000)
          factor={2} // Size factor (default=4)
          saturation={0} // Saturation 0-1 (default=0)
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
          <Menu borderless className={styles.gridStyle}>
            <Dropdown
              basic
              inverted={"true"}
              name="left"
              text={currentLeftValue.text}
              value={currentLeftValue.value}
              onChange={handleDropdownChange}
              selection
              options={planetObjectList}
            />
            <Dropdown
              basic
              inverted={"true"}
              name="right"
              text={currentRightValue.text}
              value={currentRightValue.value}
              onChange={handleDropdownChange}
              selection
              options={planetObjectList}
            />
          </Menu>
        </Html>
      </Canvas>
    </div>
  );
};

export default Scene;
