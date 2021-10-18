import useSphereHook from "../Hooks/useSphereSaturnHook";
import { saturnObject } from "../Scene/Constants";

const SaturnSphere = ({
  timeSpeed = 1,
  parentPosition = [0, 0, 0],
  initTime,
  orbitVisible,
  showNames = false
}) => {
  const [saturnMash] = useSphereHook(
    showNames,
    saturnObject.text,
    [142, 0, 142],
    parentPosition,
    saturnObject.picture,
    timeSpeed, // speed of time used for speed up animation
    saturnObject.tiltedAxis, // tilt of axis regarding to orbit
    saturnObject.orbitTilt,
    orbitVisible,
    saturnObject.rotationSpeedInHrs, // rotation speed of planet in hours
    saturnObject.revolutionInDays,
    initTime,
    undefined,
    saturnObject.rings
  );

  return saturnMash;
};

export default SaturnSphere;
