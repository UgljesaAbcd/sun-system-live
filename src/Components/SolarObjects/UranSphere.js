import useSphereHook from "../Hooks/useSphereHook";
import { uranObject } from "../Scene/Constants";

const UranSphere = ({
  timeSpeed = 1,
  parentPosition = [0, 0, 0],
  initTime,
  orbitVisible
}) => {
  const [uranMash, uranPosition] = useSphereHook(
    [287, 0, 287],
    parentPosition,
    uranObject.picture,
    86400, // speed of time used for speed up animation
    uranObject.tiltedAxis, // tilt of axis regarding to orbit
    uranObject.orbitTilt,
    orbitVisible,
    uranObject.rotationSpeedInHrs, // rotation speed of planet in hours
    uranObject.revolutionInDays,
    initTime
  );

  return uranMash;
};

export default UranSphere;
