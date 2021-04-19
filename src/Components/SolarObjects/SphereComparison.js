import React, { useRef } from "react";
import { TextureLoader, Vector3 } from "three";
import { useFrame } from "react-three-fiber";

const MySphere = ({
  position,
  picture,
  tiltedAxis = 360,
  rotationPerHrs = 0,
  radius = 1
}) => {
  // ref for mesh (planet)
  const myMesh = useRef();
  // loader that wil load texture for mesh (planet)
  const loader = new TextureLoader();
  const planetTexture = loader.load(picture);

  // tilt of planet axis
  const radians = (tiltedAxis * Math.PI) / 180;

  // speed of rotation of planet in 10th part of second
  const speedRotation = rotationPerHrs / 36000;

  let earthAxisNormalized = new Vector3(0, 1, 0).normalize();

  useFrame(() => {
    myMesh.current.rotateOnAxis(earthAxisNormalized, speedRotation);
  });

  return (
    <mesh ref={myMesh} rotation={[radians, 0, 0]} position={position}>
      <sphereBufferGeometry args={[radius, 30, 30]} attach="geometry" />
      <meshStandardMaterial map={planetTexture} />
    </mesh>
  );
};

export default MySphere;
