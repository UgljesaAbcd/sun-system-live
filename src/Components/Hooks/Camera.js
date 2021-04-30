import React, { useRef, useEffect } from "react";
import { useThree } from "react-three-fiber";
const Camera = () => {
  const camera = useRef();
  const { setDefaultCamera } = useThree();
  useEffect(() => void setDefaultCamera(camera.current), []);

  return (
    <perspectiveCamera
      ref={camera}
      position={[0, 15, 30]}
      onUpdate={self => self.updateProjectionMatrix()}
    />
  );
};

export default Camera;
