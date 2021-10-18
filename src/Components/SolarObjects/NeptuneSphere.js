import useSphereHook from "../Hooks/useSphereHook";
import { neptuneObject } from "../Scene/Constants";

const NeptuneSphere = ({
  timeSpeed = 1,
  parentPosition = [0, 0, 0],
  initTime,
  orbitVisible,
  showNames = false
}) => {
  const [neptuneMash] = useSphereHook(
    showNames,
    neptuneObject.text,
    [449, 0, 449],
    parentPosition,
    neptuneObject.picture,
    timeSpeed, // speed of time used for speed up animation
    neptuneObject.tiltedAxis, // tilt of axis regarding to orbit
    neptuneObject.orbitTilt,
    orbitVisible,
    neptuneObject.rotationSpeedInHrs, // rotation speed of planet in hours
    neptuneObject.revolutionInDays,
    initTime
  );

  return neptuneMash;
};

export default NeptuneSphere;
