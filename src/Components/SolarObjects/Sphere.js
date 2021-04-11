import React, { useRef, useEffect } from "react";
import { TextureLoader, Vector3 } from "three";
import { useFrame } from "react-three-fiber";

const MySphere = ({
  position,
  picture,
  time,
  tiltedAxis = 360,
  speedIn8HsPerS = 8
}) => {
  // ref for mesh (planet)
  const myMesh = useRef();
  // loader that wil load texture for mesh (planet)
  const loader = new TextureLoader();
  const planetTexture = loader.load(picture);

  const radians = (tiltedAxis * Math.PI) / 180;
  const speedRotation = 1 / speedIn8HsPerS / 10;

  let earthAxis2 = new Vector3(0, 1, 0).normalize();

  useFrame(() => {
    myMesh.current.rotateOnAxis(earthAxis2, speedRotation);
  });

  return (
    <mesh ref={myMesh} rotation={[radians, 0, 0]} position={position}>
      <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />
      <meshStandardMaterial map={planetTexture} />
    </mesh>
  );
};

export default MySphere;
