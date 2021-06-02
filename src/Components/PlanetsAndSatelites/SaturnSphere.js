import useSphereSaturnHook from "../Hooks/useSphereSaturnHook";
import useSphereHook from "../Hooks/useSphereHook";
import { saturnObject, iapetusObject } from "./Constants";

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

  const [iapetusMash] = useSphereHook(
    showNames,
    iapetusObject.text,
    [
      iapetusObject.distanceToPlanet / 5000,
      0,
      iapetusObject.distanceToPlanet / 5000
    ],
    [0, 0, 0],
    iapetusObject.picture,
    86400 / 4, // speed of time used for speed up animation
    iapetusObject.tiltedAxis, // tilt of axis regarding to orbit
    iapetusObject.orbitTilt,
    orbitVisible,
    iapetusObject.rotationSpeedInHrs, // rotation speed of planet in hours
    iapetusObject.revolutionInDays,
    initTime,
    iapetusObject.radius / 5000
  );

  return (
    <group>
      {saturnMash}
      {iapetusMash}
    </group>
  );
};

export default SaturnSphere;
