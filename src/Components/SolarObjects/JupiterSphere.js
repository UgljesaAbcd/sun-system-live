import useSphereHook from "../Hooks/useSphereHook";
import { jupiterObject } from "../Scene/Constants";

const JupiterSphere = ({
  timeSpeed = 1,
  parentPosition = [0, 0, 0],
  initTime,
  orbitVisible,
  showNames = false
}) => {
  const [jupiterMash] = useSphereHook(
    showNames,
    jupiterObject.text,
    [77, 0, 77],
    parentPosition,
    jupiterObject.picture,
    timeSpeed, // speed of time used for speed up animation
    jupiterObject.tiltedAxis, // tilt of axis regarding to orbit
    jupiterObject.orbitTilt,
    orbitVisible,
    jupiterObject.rotationSpeedInHrs, // rotation speed of planet in hours
    jupiterObject.revolutionInDays,
    initTime
  );

  return jupiterMash;
};

export default JupiterSphere;
