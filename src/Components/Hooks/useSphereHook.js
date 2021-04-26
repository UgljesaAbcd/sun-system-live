import React, { useRef } from "react";
import { TextureLoader, Vector3 } from "three";
import { useFrame } from "react-three-fiber";

const useSphereHook = (
  relativePosition = [0, 0, 0], // position relative to parent object
  parentPosition = [0, 0, 0], //current position of parent object
  picture, // picture for planet surface
  timeSpeed = 1, // speed of time used for speed up animation
  tiltedAxis = 360, // tilt of axis regarding to orbit
  orbitTilt = 0,
  hrsForRotation = 0, // rotation speed of planet in hours
  revolutionInDays = 1,
  initTime,
  radius = 0.7,
  widthSegments = 30,
  heightSegments = 30
) => {
  // ref for mesh (planet)
  const myMesh = useRef();
  // loader that wil load texture for mesh (planet)
  const loader = new TextureLoader();
  const planetTexture = loader.load(picture);

  let currentPosition = [
    parentPosition[0] + relativePosition[0],
    parentPosition[1] + relativePosition[1],
    parentPosition[2] + relativePosition[2]
  ];

  // tilt of planet axis
  const radians = (tiltedAxis * Math.PI) / 180;
  const orbitalTiltInRadians = ((orbitTilt + 180) * Math.PI) / 180;

  // speed of rotation of planet in 10th part of second
  const andleRotationPms = (360 / (hrsForRotation * 3600000)) * timeSpeed;
  // const andleRotationPms = 0.36;
  const speedRotation = (andleRotationPms * Math.PI) / 180;

  // const revolutionIn10thOfSeconds = revolutionInDays / (24 * 3600 * 10);
  // 360' / daysForRevolution / perHour / perMinute / perSecund / final
  const angleOfRevPer10thOfSecond =
    ((360 / ((revolutionInDays / timeSpeed) * 24 * 60 * 60 * 1000)) * Math.PI) /
    180;

  // this is vector that defines rotation direction and is same for all planets
  let earthAxisNormalized = new Vector3(0, 1, 0).normalize();

  useFrame(() => {
    let currentTime = new Date();
    let diffTime = currentTime.getTime() - initTime.getTime();

    // let rotationDiff = speedRotation * diffTime;
    myMesh.current.rotateOnAxis(earthAxisNormalized, speedRotation * 15);

    let revOrbAngleDiff = angleOfRevPer10thOfSecond * diffTime;

    let relativeXDiff = Math.sin(revOrbAngleDiff) * relativePosition[0];
    let relativeZDiff = Math.cos(revOrbAngleDiff) * relativePosition[2];

    let newX = parentPosition[0] + relativeXDiff;
    let tempZ = Math.cos(orbitalTiltInRadians) + relativeZDiff;
    let tempY = Math.sin(orbitalTiltInRadians) * relativeZDiff;
    let newY = parentPosition[1] + tempY;
    let newZ = parentPosition[2] + tempZ;

    currentPosition[0] = newX;
    currentPosition[1] = newY;
    currentPosition[2] = newZ;

    myMesh.current.position.setX(newX);
    myMesh.current.position.setY(newY);
    myMesh.current.position.setZ(newZ);
  });

  return [
    <mesh
      ref={myMesh}
      rotation={[radians, 0, 0]}
      position={[
        parentPosition[0] + relativePosition[0],
        parentPosition[1] + relativePosition[1],
        parentPosition[2] + relativePosition[2]
      ]}
      receiveShadow={true}
    >
      <sphereBufferGeometry
        args={[radius, widthSegments, heightSegments]}
        attach="geometry"
      />
      <meshStandardMaterial map={planetTexture} />
    </mesh>,
    currentPosition
  ];
};

export default useSphereHook;
