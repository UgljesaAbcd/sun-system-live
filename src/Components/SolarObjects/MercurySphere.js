import useSphereHook from "../Hooks/useSphereHook";
import { mercuryObject } from "../Scene/Constants";

const MercurySphere = ({
  timeSpeed = 1,
  parentPosition = [0, 0, 0],
  initTime,
  orbitVisible,
  showNames = false
}) => {
  const [mercuryMash] = useSphereHook(
    showNames,
    mercuryObject.text,
    [5, 0, 5],
    parentPosition,
    mercuryObject.picture,
    timeSpeed, // speed of time used for speed up animation
    mercuryObject.tiltedAxis, // tilt of axis regarding to orbit
    mercuryObject.orbitTilt,
    orbitVisible,
    mercuryObject.rotationSpeedInHrs, // rotation speed of planet in hours
    mercuryObject.revolutionInDays,
    initTime
  );

  return mercuryMash;
};

export default MercurySphere;
