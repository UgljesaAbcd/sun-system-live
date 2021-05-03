import React, { useRef, useEffect } from "react";
import { useThree } from "react-three-fiber";

const Camera = ({ children, position = [0, 15, 30] }) => {
  const camera = useRef();
  const { setDefaultCamera } = useThree();
  useEffect(() => void setDefaultCamera(camera.current), []);

  return (
    <perspectiveCamera
      ref={camera}
      position={position}
      onUpdate={self => self.updateProjectionMatrix()}
    >
      {children && children}
    </perspectiveCamera>
  );
};

export default Camera;
