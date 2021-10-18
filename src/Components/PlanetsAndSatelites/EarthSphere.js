import useSphereHook from "../Hooks/useSphereHook";
import { earthObject, moonObject } from "./Constants";

const EarthSphere = ({
  timeSpeed = 1,
  parentPosition = [0, 0, 0],
  initTime,
  orbitVisible,
  showNames = false
}) => {
  const [earthMash, earthPosition] = useSphereHook(
    showNames,
    earthObject.text,
    [0, 0, 0],
    parentPosition,
    earthObject.picture,
    timeSpeed, // speed of time used for speed up animation
    earthObject.tiltedAxis, // tilt of axis regarding to orbit
    earthObject.orbitTilt,
    orbitVisible,
    earthObject.rotationSpeedInHrs, // rotation speed of planet in hours
    earthObject.revolutionInDays,
    initTime,
    earthObject.radius / 5000
  );

  const [moonMash] = useSphereHook(
    showNames,
    moonObject.text,
    [moonObject.distanceToPlanet / 5000, 0, moonObject.distanceToPlanet / 5000],
    earthPosition ? earthPosition : [0, 0, 0],
    moonObject.picture,
    timeSpeed, // speed of time used for speed up animation
    moonObject.tiltedAxis, // tilt of axis regarding to orbit
    moonObject.orbitTilt,
    orbitVisible,
    moonObject.rotationSpeedInHrs, // rotation speed of planet in hours
    moonObject.revolutionInDays,
    initTime,
    moonObject.radius / 5000
  );

  return (
    <group>
      {earthMash}
      {moonMash}
    </group>
  );
};

export default EarthSphere;
