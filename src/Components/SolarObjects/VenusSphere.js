import useSphereHook from "../Hooks/useSphereHook";
import { venusObject } from "../Scene/Constants";

const VenusSphere = ({
  timeSpeed = 1,
  parentPosition = [0, 0, 0],
  initTime
}) => {
  const [venusMash, venusPosition] = useSphereHook(
    [10, 0, 10],
    parentPosition,
    venusObject.picture,
    86400, // speed of time used for speed up animation
    venusObject.tiltedAxis, // tilt of axis regarding to orbit
    venusObject.orbitTilt,
    venusObject.rotationSpeedInHrs, // rotation speed of planet in hours
    venusObject.revolutionInDays,
    initTime
  );

  return venusMash;
};

export default VenusSphere;
