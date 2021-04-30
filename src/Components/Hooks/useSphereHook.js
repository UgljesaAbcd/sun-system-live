import React, { useRef } from "react";
import { TextureLoader, Vector3 } from "three";
import { useFrame } from "react-three-fiber";

const useSphereHook = (
  relativePosition = [0, 0, 0], // position relative to parent object
  parentPosition = [0, 0, 0], //current position of parent object
  picture, // picture for planet surface
  timeSpeed = 1, // speed of time used for speed up animation
  tiltedAxis = 360, // tilt of axis regarding to orbit
  orbitTilt = 0, // orbit inclination
  hrsForRotation = 0, // rotation speed of planet in hours
  revolutionInDays = 1,
  initTime, // initial time initiated when component is open and used for time diff
  radius = 0.7, // radius of planet
  widthSegments = 30, // one segment of sphere dim
  heightSegments = 30 // one segment of sphere dim
) => {
  // ref for mesh (planet)
  const planetMesh = useRef();
  const orbitMesh = useRef();
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
  const orbitInclimentInRad = ((90 - orbitTilt) * Math.PI) / 180;
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
    planetMesh.current.rotateOnAxis(earthAxisNormalized, speedRotation * 15);

    let revOrbAngleDiff = angleOfRevPer10thOfSecond * diffTime;

    let relativeXDiff = Math.cos(revOrbAngleDiff) * relativePosition[0];
    let relativeZDiff = Math.sin(revOrbAngleDiff) * relativePosition[2];

    let newX = parentPosition[0] + relativeXDiff;
    let tempZ = Math.cos(orbitalTiltInRadians) * relativeZDiff;
    let tempY = Math.sin(orbitalTiltInRadians) * relativeZDiff;
    let newY = parentPosition[1] + tempY;
    let newZ = parentPosition[2] + tempZ;

    currentPosition[0] = newX;
    currentPosition[1] = newY;
    currentPosition[2] = newZ;

    orbitMesh.current.position.setX(parentPosition[0]);
    orbitMesh.current.position.setY(parentPosition[1]);
    orbitMesh.current.position.setZ(parentPosition[2]);

    planetMesh.current.position.setX(newX);
    planetMesh.current.position.setY(newY);
    planetMesh.current.position.setZ(newZ);
  });

  return [
    <group>
      <mesh
        ref={planetMesh}
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
      </mesh>
      <mesh
        ref={orbitMesh}
        rotation={[orbitInclimentInRad, 0, 0]}
        position={parentPosition}
      >
        <line>
          <ringBufferGeometry
            attach="geometry"
            args={[relativePosition[0], relativePosition[2] + 0.0001, 360]}
          />
          <lineBasicMaterial attach="material" args={["#9c88ff", 1]} />
        </line>
      </mesh>
    </group>,
    currentPosition
  ];
};

export default useSphereHook;
