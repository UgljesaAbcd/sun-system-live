import React, { useRef } from "react";
import { TextureLoader, Vector3 } from "three";
import { useFrame } from "react-three-fiber";

const MySphere = ({
  position,
  picture,
  timeSpeed,
  tiltedAxis = 360,
  rotationPerHrs = 0,
  orbitalSpeedKmPerHrs = 0,
  revolutionInDays,
  initTile,
  name
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

  const revolutionIn10thOfSeconds = revolutionInDays * 24 * 3600 * 10;
  // speed of revolution of planet in 10th part of second
  const angleOfRevPer10thOfSecond =
    timeSpeed * (Math.PI / (orbitalSpeedKmPerHrs * revolutionIn10thOfSeconds));

  let earthAxisNormalized = new Vector3(0, 1, 0).normalize();

  useFrame(() => {
    myMesh.current.rotateOnAxis(earthAxisNormalized, speedRotation);
    if (name && name === "sun") {
    } else {
      let currentTime = new Date();
      let diffTime = (currentTime.getTime() - initTile.getTime()) * 2;

      let angleDiff = angleOfRevPer10thOfSecond * (diffTime / 10);

      let newX = Math.sin(angleDiff) * position[0];
      let newZ = Math.cos(angleDiff) * position[2];

      myMesh.current.position.setX(newX);
      myMesh.current.position.setZ(newZ);
    }
  });

  return (
    <mesh
      ref={myMesh}
      rotation={[radians, 0, 0]}
      position={position}
      receiveShadow={true}
    >
      <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />
      {name === "sun" ? (
        <meshBasicMaterial color="white" />
      ) : (
        <meshStandardMaterial map={planetTexture} />
      )}
    </mesh>
  );
};

export default MySphere;
