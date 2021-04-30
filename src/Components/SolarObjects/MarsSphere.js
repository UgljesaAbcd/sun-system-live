import useSphereHook from "../Hooks/useSphereHook";
import { marsObject } from "../Scene/Constants";

const MarsSphere = ({
  timeSpeed = 1,
  parentPosition = [0, 0, 0],
  initTime,
  orbitVisible
}) => {
  const [marsMash, marsPosition] = useSphereHook(
    [22, 0, 22],
    parentPosition,
    marsObject.picture,
    86400, // speed of time used for speed up animation
    marsObject.tiltedAxis, // tilt of axis regarding to orbit
    marsObject.orbitTilt,
    orbitVisible,
    marsObject.rotationSpeedInHrs, // rotation speed of planet in hours
    marsObject.revolutionInDays,
    initTime
  );

  return marsMash;
};

export default MarsSphere;
