import useSphereSaturnHook from "../Hooks/useSphereSaturnHook";
import { saturnObject } from "../Scene/Constants";

const SaturnSphere = ({
  timeSpeed = 1,
  parentPosition = [0, 0, 0],
  initTime,
  orbitVisible,
  showNames = false
}) => {
  const [saturnMash] = useSphereSaturnHook(
    showNames,
    saturnObject.text,
    [0, 0, 0],
    parentPosition,
    saturnObject.picture,
    86400 / 4, // speed of time used for speed up animation
    saturnObject.tiltedAxis, // tilt of axis regarding to orbit
    saturnObject.orbitTilt,
    orbitVisible,
    saturnObject.rotationSpeedInHrs, // rotation speed of planet in hours
    saturnObject.revolutionInDays,
    initTime,
    saturnObject.radius / 5000,
    saturnObject.rings
  );

  return saturnMash;
};

export default SaturnSphere;
