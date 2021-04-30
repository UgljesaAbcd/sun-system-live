import useSphereHook from "../Hooks/useSphereHook";
import { earthObject, moonObject } from "../Scene/Constants";

const EarthSphere = ({
  timeSpeed = 1,
  parentPosition = [0, 0, 0],
  initTime,
  orbitVisible
}) => {
  const [earthMash, earthPosition] = useSphereHook(
    [14, 0, 14],
    parentPosition,
    earthObject.picture,
    86400, // speed of time used for speed up animation
    earthObject.tiltedAxis, // tilt of axis regarding to orbit
    earthObject.orbitTilt,
    orbitVisible,
    earthObject.rotationSpeedInHrs, // rotation speed of planet in hours
    earthObject.revolutionInDays,
    initTime
  );

  const [moonMash, moomPosition] = useSphereHook(
    [3, 0, 3],
    earthPosition ? earthPosition : [14, 0, 14],
    moonObject.picture,
    86400, // speed of time used for speed up animation
    moonObject.tiltedAxis, // tilt of axis regarding to orbit
    moonObject.orbitTilt,
    orbitVisible,
    moonObject.rotationSpeedInHrs, // rotation speed of planet in hours
    moonObject.revolutionInDays,
    initTime,
    0.3
  );

  return (
    <group>
      {earthMash}
      {moonMash}
    </group>
  );
};

export default EarthSphere;
