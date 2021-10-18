import useSphereHook from "../Hooks/useSphereHook";
import { venusObject } from "../Scene/Constants";

const VenusSphere = ({
  timeSpeed = 1,
  parentPosition = [0, 0, 0],
  initTime,
  orbitVisible,
  showNames = false
}) => {
  const [venusMash] = useSphereHook(
    showNames,
    venusObject.text,
    [10, 0, 10],
    parentPosition,
    venusObject.picture,
    timeSpeed, // speed of time used for speed up animation
    venusObject.tiltedAxis, // tilt of axis regarding to orbit
    venusObject.orbitTilt,
    orbitVisible,
    venusObject.rotationSpeedInHrs, // rotation speed of planet in hours
    venusObject.revolutionInDays,
    initTime
  );

  return venusMash;
};

export default VenusSphere;
