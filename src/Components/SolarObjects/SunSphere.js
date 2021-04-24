import React, { useRef } from "react";
import { Vector3 } from "three";
import { useFrame } from "react-three-fiber";

const MySphere = ({ position, tiltedAxis = 360, rotationPerHrs = 0 }) => {
  // ref for mesh (planet)
  const myMesh = useRef();

  // tilt of planet axis
  const radians = (tiltedAxis * Math.PI) / 180;

  // speed of rotation of planet in 10th part of second
  const speedRotation = rotationPerHrs / 36000;

  let earthAxisNormalized = new Vector3(0, 1, 0).normalize();

  useFrame(() => {
    myMesh.current.rotateOnAxis(earthAxisNormalized, speedRotation);
  });

  return (
    <>
      <mesh
        ref={myMesh}
        rotation={[radians, 0, 0]}
        position={position}
        receiveShadow={true}
      >
        <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />

        <meshBasicMaterial color="white" />
      </mesh>
    </>
  );
};

export default MySphere;
