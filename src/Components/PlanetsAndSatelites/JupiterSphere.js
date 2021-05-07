import useSphereHook from "../Hooks/useSphereHook";
import {
  jupiterObject,
  ioObject,
  europaObject,
  ganymedeObject,
  callistoObject
} from "./Constants";

const JupiterSphere = ({
  timeSpeed = 1,
  parentPosition = [0, 0, 0],
  initTime,
  orbitVisible,
  showNames = false
}) => {
  const [jupiterMash, jupiterPosition] = useSphereHook(
    showNames,
    jupiterObject.text,
    [0, 0, 0],
    parentPosition,
    jupiterObject.picture,
    86400 / 4, // speed of time used for speed up animation
    jupiterObject.tiltedAxis, // tilt of axis regarding to orbit
    jupiterObject.orbitTilt,
    orbitVisible,
    jupiterObject.rotationSpeedInHrs, // rotation speed of planet in hours
    jupiterObject.revolutionInDays,
    initTime,
    jupiterObject.radius / 5000
  );

  const [ioMash] = useSphereHook(
    showNames,
    ioObject.text,
    [ioObject.distanceToPlanet / 5000, 0, ioObject.distanceToPlanet / 5000],
    [0, 0, 0],
    ioObject.picture,
    86400 / 4, // speed of time used for speed up animation
    ioObject.tiltedAxis, // tilt of axis regarding to orbit
    ioObject.orbitTilt,
    orbitVisible,
    ioObject.rotationSpeedInHrs, // rotation speed of planet in hours
    ioObject.revolutionInDays,
    initTime,
    ioObject.radius / 5000
  );

  const [europaMash] = useSphereHook(
    showNames,
    europaObject.text,
    [
      europaObject.distanceToPlanet / 5000,
      0,
      europaObject.distanceToPlanet / 5000
    ],
    [0, 0, 0],
    europaObject.picture,
    86400 / 4, // speed of time used for speed up animation
    europaObject.tiltedAxis, // tilt of axis regarding to orbit
    europaObject.orbitTilt,
    orbitVisible,
    europaObject.rotationSpeedInHrs, // rotation speed of planet in hours
    europaObject.revolutionInDays,
    initTime,
    europaObject.radius / 5000
  );

  const [ganymedeMash] = useSphereHook(
    showNames,
    ganymedeObject.text,
    [
      ganymedeObject.distanceToPlanet / 5000,
      0,
      ganymedeObject.distanceToPlanet / 5000
    ],
    [0, 0, 0],
    ganymedeObject.picture,
    86400 / 4, // speed of time used for speed up animation
    ganymedeObject.tiltedAxis, // tilt of axis regarding to orbit
    ganymedeObject.orbitTilt,
    orbitVisible,
    ganymedeObject.rotationSpeedInHrs, // rotation speed of planet in hours
    ganymedeObject.revolutionInDays,
    initTime,
    ganymedeObject.radius / 5000
  );

  const [callistoMash] = useSphereHook(
    showNames,
    callistoObject.text,
    [
      callistoObject.distanceToPlanet / 5000,
      0,
      callistoObject.distanceToPlanet / 5000
    ],
    [0, 0, 0],
    callistoObject.picture,
    86400 / 4, // speed of time used for speed up animation
    callistoObject.tiltedAxis, // tilt of axis regarding to orbit
    callistoObject.orbitTilt,
    orbitVisible,
    callistoObject.rotationSpeedInHrs, // rotation speed of planet in hours
    callistoObject.revolutionInDays,
    initTime,
    callistoObject.radius / 5000
  );

  return (
    <group>
      {jupiterMash}
      {ioMash}
      {europaMash}
      {ganymedeMash}
      {callistoMash}
    </group>
  );
};

export default JupiterSphere;
