import useSphereHook from "../Hooks/useSphereHook";
import { mercuryObject } from "../Scene/Constants";

const MercurySphere = ({
  timeSpeed = 1,
  parentPosition = [0, 0, 0],
  initTime
}) => {
  const [mercuryMash, mercuryPosition] = useSphereHook(
    [5, 0, 5],
    parentPosition,
    mercuryObject.picture,
    86400, // speed of time used for speed up animation
    mercuryObject.tiltedAxis, // tilt of axis regarding to orbit
    mercuryObject.orbitTilt,
    mercuryObject.rotationSpeedInHrs, // rotation speed of planet in hours
    mercuryObject.revolutionInDays,
    initTime
  );

  return mercuryMash;
};

export default MercurySphere;
