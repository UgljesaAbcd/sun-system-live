import useSphereHook from "../Hooks/useSphereHook";
import { saturnObject } from "../Scene/Constants";

const SaturnSphere = ({
  timeSpeed = 1,
  parentPosition = [0, 0, 0],
  initTime
}) => {
  const [saturnMash, saturnPosition] = useSphereHook(
    [142, 0, 142],
    parentPosition,
    saturnObject.picture,
    86400, // speed of time used for speed up animation
    saturnObject.tiltedAxis, // tilt of axis regarding to orbit
    saturnObject.orbitTilt,
    saturnObject.rotationSpeedInHrs, // rotation speed of planet in hours
    saturnObject.revolutionInDays,
    initTime
  );

  return saturnMash;
};

export default SaturnSphere;
