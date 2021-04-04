import React, { useRef } from "react";
import {
  TextureLoader,
  Vector3,
  MathUtils,
  Euler,
  Matrix4,
  Quaternion
} from "three";
import { useFrame } from "react-three-fiber";

const MySphere = ({
  position,
  picture,
  time,
  vectorOfSphere = { x: 0, y: 1, z: 0 },
  EulerOfSphere = { x: 0, y: 0, z: 0 }
}) => {
  // ref for mesh (planet)
  const myMesh = useRef();
  // loader that wil load texture for mesh (planet)
  const loader = new TextureLoader();
  const planetTexture = loader.load(picture);

  // tilt of planet
  // const tiltOfPlanet = new Vector3(0, 1, 0);
  // const myEuler = new Euler(0.3, 0.3, 0);
  // tiltOfPlanet.applyEuler(myEuler);
  // const quaternion = new Quaternion();
  // quaternion.setFromAxisAngle(new Vector3(0, 1, 0), Math.PI / 2);
  // const vector = new Vector3(1, 0, 0);
  // vector.applyQuaternion(quaternion).normalize();

  let radians = (23.4 * Math.PI) / 180;
  let myMatrix = new Matrix4().makeRotationZ(-radians);
  let earthAxis = new Vector3(
    Math.sin(radians),

    Math.cos(radians),

    0
  ).normalize();

  // frame used for time rotating of planet

  useFrame(() => {
    myMesh.current.geometry.applyMatrix4(myMatrix);
    myMesh.current.rotateOnAxis(earthAxis, 0.01);
  });

  return (
    <mesh ref={myMesh} position={position}>
      <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />
      <meshStandardMaterial map={planetTexture} />
    </mesh>
  );
};

export default MySphere;
