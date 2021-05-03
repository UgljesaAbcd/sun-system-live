import React, { useRef, useEffect } from "react";
import { useThree } from "react-three-fiber";
import { Html } from "@react-three/drei";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu/Menu";
import Checkbox from "semantic-ui-react/dist/commonjs/modules/Checkbox/Checkbox";
import styles from "../Scene/style/Scene.module.scss";

const Camera = ({ setOrbitVisible, orbitVisible, showNames, setShowNames }) => {
  const camera = useRef();
  const { setDefaultCamera } = useThree();
  useEffect(() => void setDefaultCamera(camera.current), []);

  return (
    <perspectiveCamera
      ref={camera}
      position={[0, 15, 30]}
      onUpdate={self => self.updateProjectionMatrix()}
    >
      <Html
        style={{
          height: "50px",
          top: "calc(-80vh)",
          left: "calc(-25vh)",
          width: "370px"
        }}
      >
        <div>
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
        </div>
      </Html>
    </perspectiveCamera>
  );
};

export default Camera;
