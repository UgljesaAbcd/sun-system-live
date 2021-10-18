import useSphereSaturnHook from "../Hooks/useSphereSaturnHook";
import useSphereHookIapetus from "../Hooks/useSphereHookIapetus";
import {
  saturnObject,
  iapetusObject,
  tethysObject,
  dioneObject,
  rheaObject,
  titanObject
} from "./Constants";

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
    timeSpeed, // speed of time used for speed up animation
    saturnObject.tiltedAxis, // tilt of axis regarding to orbit
    saturnObject.orbitTilt,
    orbitVisible,
    saturnObject.rotationSpeedInHrs, // rotation speed of planet in hours
    saturnObject.revolutionInDays,
    initTime,
    saturnObject.radius / 5000,
    saturnObject.rings
  );

  const [iapetusMash] = useSphereHookIapetus(
    showNames,
    iapetusObject.text,
    [
      iapetusObject.distanceToPlanet / 5000,
      0,
      iapetusObject.distanceToPlanet / 5000
    ],
    [0, 0, 0],
    iapetusObject.picture,
    timeSpeed, // speed of time used for speed up animation
    iapetusObject.tiltedAxis, // tilt of axis regarding to orbit
    iapetusObject.orbitTilt,
    orbitVisible,
    iapetusObject.rotationSpeedInHrs, // rotation speed of planet in hours
    iapetusObject.revolutionInDays,
    initTime,
    iapetusObject.radius / 5000
  );

  const [tethysMash] = useSphereHookIapetus(
    showNames,
    tethysObject.text,
    [
      tethysObject.distanceToPlanet / 5000,
      0,
      tethysObject.distanceToPlanet / 5000
    ],
    [0, 0, 0],
    tethysObject.picture,
    timeSpeed, // speed of time used for speed up animation
    tethysObject.tiltedAxis, // tilt of axis regarding to orbit
    tethysObject.orbitTilt,
    orbitVisible,
    tethysObject.rotationSpeedInHrs, // rotation speed of planet in hours
    tethysObject.revolutionInDays,
    initTime,
    tethysObject.radius / 5000
  );

  const [dioneMash] = useSphereHookIapetus(
    showNames,
    dioneObject.text,
    [
      dioneObject.distanceToPlanet / 5000,
      0,
      dioneObject.distanceToPlanet / 5000
    ],
    [0, 0, 0],
    dioneObject.picture,
    timeSpeed, // speed of time used for speed up animation
    dioneObject.tiltedAxis, // tilt of axis regarding to orbit
    dioneObject.orbitTilt,
    orbitVisible,
    dioneObject.rotationSpeedInHrs, // rotation speed of planet in hours
    dioneObject.revolutionInDays,
    initTime,
    dioneObject.radius / 5000
  );

  const [rheaMash] = useSphereHookIapetus(
    showNames,
    rheaObject.text,
    [rheaObject.distanceToPlanet / 5000, 0, rheaObject.distanceToPlanet / 5000],
    [0, 0, 0],
    rheaObject.picture,
    timeSpeed, // speed of time used for speed up animation
    rheaObject.tiltedAxis, // tilt of axis regarding to orbit
    rheaObject.orbitTilt,
    orbitVisible,
    rheaObject.rotationSpeedInHrs, // rotation speed of planet in hours
    rheaObject.revolutionInDays,
    initTime,
    rheaObject.radius / 5000
  );

  const [titanMash] = useSphereHookIapetus(
    showNames,
    titanObject.text,
    [
      titanObject.distanceToPlanet / 5000,
      0,
      titanObject.distanceToPlanet / 5000
    ],
    [0, 0, 0],
    titanObject.picture,
    timeSpeed, // speed of time used for speed up animation
    titanObject.tiltedAxis, // tilt of axis regarding to orbit
    titanObject.orbitTilt,
    orbitVisible,
    titanObject.rotationSpeedInHrs, // rotation speed of planet in hours
    titanObject.revolutionInDays,
    initTime,
    titanObject.radius / 5000
  );

  return (
    <group>
      {saturnMash}
      {iapetusMash}
      {tethysMash}
      {dioneMash}
      {rheaMash}
      {titanMash}
    </group>
  );
};

export default SaturnSphere;
