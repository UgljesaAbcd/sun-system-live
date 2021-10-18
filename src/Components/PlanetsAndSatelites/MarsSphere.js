import useSphereHook from "../Hooks/useSphereHook";
import { marsObject, phobosObject, deimosObject } from "../Scene/Constants";

const MarsSphere = ({
  timeSpeed = 1,
  parentPosition = [0, 0, 0],
  initTime,
  orbitVisible,
  showNames = false
}) => {
  const [marsMash, marsPosition] = useSphereHook(
    showNames,
    marsObject.text,
    [0, 0, 0],
    parentPosition,
    marsObject.picture,
    timeSpeed, // speed of time used for speed up animation
    marsObject.tiltedAxis, // tilt of axis regarding to orbit
    marsObject.orbitTilt,
    orbitVisible,
    marsObject.rotationSpeedInHrs, // rotation speed of planet in hours
    marsObject.revolutionInDays,
    initTime,
    marsObject.radius / 5000
  );

  const [phobosMash] = useSphereHook(
    showNames,
    phobosObject.text,
    [
      phobosObject.distanceToPlanet / 5000,
      0,
      phobosObject.distanceToPlanet / 5000
    ],
    marsPosition ? marsPosition : [0, 0, 0],
    phobosObject.picture,
    timeSpeed, // speed of time used for speed up animation
    phobosObject.tiltedAxis, // tilt of axis regarding to orbit
    phobosObject.orbitTilt,
    orbitVisible,
    phobosObject.rotationSpeedInHrs, // rotation speed of planet in hours
    phobosObject.revolutionInDays,
    initTime,
    phobosObject.radius / 5000
  );

  const [deimosMash] = useSphereHook(
    showNames,
    deimosObject.text,
    [
      deimosObject.distanceToPlanet / 5000,
      0,
      deimosObject.distanceToPlanet / 5000
    ],
    marsPosition ? marsPosition : [0, 0, 0],
    deimosObject.picture,
    timeSpeed, // speed of time used for speed up animation
    deimosObject.tiltedAxis, // tilt of axis regarding to orbit
    deimosObject.orbitTilt,
    orbitVisible,
    deimosObject.rotationSpeedInHrs, // rotation speed of planet in hours
    deimosObject.revolutionInDays,
    initTime,
    deimosObject.radius / 5000
  );

  return (
    <group>
      {marsMash}
      {phobosMash}
      {deimosMash}
    </group>
  );
};

export default MarsSphere;
