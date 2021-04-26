import sun from "../../Components/Textures/sun2.jpg";
import mercury from "../../Components/Textures/mercury.png";
import venus from "../../Components/Textures/venus.png";
import earth from "../../Components/Textures/earth2.jpg";
import mars from "../../Components/Textures/mars.jpg";
import jupiter from "../../Components/Textures/jupiter.jpg";
import saturn from "../../Components/Textures/saturn.jpg";
import uran from "../../Components/Textures/uranus.jpg";
import neptune from "../../Components/Textures/neptune.jpg";
import pluto from "../../Components/Textures/pluto.jpg";
import moon from "../../Components/Textures/moon2.jpg";

export const planetObjectList = [
  {
    tiltedAxis: 7.25,
    rotationSpeed: 672,
    radius: 69.634,
    key: "sun",
    value: "sun",
    text: "Sun",
    picture: sun
  },
  {
    tiltedAxis: 0.03,
    rotationSpeed: 1407.5,
    radius: 0.2493,
    key: "mercury",
    value: "mercury",
    text: "Mercury",
    picture: mercury
  },
  {
    tiltedAxis: 177.3,
    rotationSpeed: 5832,
    radius: 0.6051,
    key: "venus",
    value: "venus",
    text: "Venus",
    picture: venus
  },
  {
    tiltedAxis: 23.4,
    rotationSpeed: 24,
    radius: 0.6377,
    key: "earth",
    value: "earth",
    text: "Earth",
    picture: earth
  },
  {
    tiltedAxis: 25.19,
    rotationSpeed: 24.623,
    radius: 0.3389,
    key: "mars",
    value: "mars",
    text: "Mars",
    picture: mars
  },
  {
    tiltedAxis: 3.13,
    rotationSpeed: 9.925,
    radius: 6.9991,
    key: "jupiter",
    value: "jupiter",
    text: "Jupiter",
    picture: jupiter
  },
  {
    tiltedAxis: 26.73,
    rotationSpeed: 10.656,
    radius: 5.8232,
    key: "saturn",
    value: "saturn",
    text: "Saturn",
    picture: saturn
  },
  {
    tiltedAxis: 82.23,
    rotationSpeed: 17.24,
    radius: 2.5362,
    key: "uran",
    value: "uran",
    text: "Uran",
    picture: uran
  },
  {
    tiltedAxis: 28.32,
    rotationSpeed: 16.11,
    radius: 2.4622,
    key: "neptune",
    value: "neptune",
    text: "Neptune",
    picture: neptune
  },
  {
    tiltedAxis: 0,
    rotationSpeed: 50,
    radius: 0.17371,
    key: "moon",
    value: "moon",
    text: "Moon",
    picture: moon
  }
];

export const sunObject = {
  tiltedAxis: 7.25,
  rotationSpeedInHrs: 672,
  revolutionInDays: null,
  radius: 696340,
  key: "sun",
  value: "sun",
  text: "Sun",
  picture: sun,
  distanceToSun: null,
  type: "star"
};

export const mercuryObject = {
  tiltedAxis: 0.03,
  orbitTilt: 7,
  rotationSpeedInHrs: 1407.5,
  revolutionInDays: 88,
  radius: 2493.7,
  key: "mercury",
  value: "mercury",
  text: "Mercury",
  picture: mercury,
  distanceToSun: 57909227,
  type: "planet"
};

export const venusObject = {
  tiltedAxis: 177.3,
  orbitTilt: 3.4,
  rotationSpeedInHrs: 5832,
  revolutionInDays: 224.7,
  radius: 6051.8,
  key: "venus",
  value: "venus",
  text: "Venus",
  picture: venus,
  distanceToSun: 108209475,
  type: "planet"
};

export const earthObject = {
  tiltedAxis: 23.4,
  orbitTilt: 0,
  rotationSpeedInHrs: 24,
  revolutionInDays: 365.3,
  radius: 6377.397,
  key: "earth",
  value: "earth",
  text: "Earth",
  picture: earth,
  distanceToSun: 149600000,
  type: "planet"
};

export const marsObject = {
  tiltedAxis: 25.19,
  orbitTilt: 1.85,
  rotationSpeedInHrs: 24.623,
  revolutionInDays: 656.98,
  radius: 3389.5,
  key: "mars",
  value: "mars",
  text: "Mars",
  picture: mars,
  distanceToSun: 227943824,
  type: "planet"
};

export const jupiterObject = {
  tiltedAxis: 3.13,
  orbitTilt: 1.3,
  rotationSpeedInHrs: 9.925,
  revolutionInDays: 4328.9,
  radius: 69911,
  key: "jupiter",
  value: "jupiter",
  text: "Jupiter",
  picture: jupiter,
  distanceToSun: 778340821,
  type: "planet"
};

export const saturnObject = {
  tiltedAxis: 26.73,
  orbitTilt: 3.4,
  rotationSpeedInHrs: 10.656,
  revolutionInDays: 10749.25,
  radius: 58232,
  key: "saturn",
  value: "saturn",
  text: "Saturn",
  picture: saturn,
  distanceToSun: 1426666422,
  type: "planet"
};

export const uranObject = {
  tiltedAxis: 82.23,
  orbitTilt: 0.77,
  rotationSpeedInHrs: 17.24,
  revolutionInDays: 30668,
  radius: 25362,
  key: "uran",
  value: "uran",
  text: "Uran",
  picture: uran,
  distanceToSun: 2870658186,
  type: "planet"
};

export const neptuneObject = {
  tiltedAxis: 28.32,
  orbitTilt: 1.77,
  rotationSpeedInHrs: 16.11,
  revolutionInDays: 60150,
  radius: 24622,
  key: "neptune",
  value: "neptune",
  text: "Neptune",
  picture: neptune,
  distanceToSun: 4498396441,
  type: "planet"
};

export const moonObject = {
  tiltedAxis: 0,
  orbitTilt: 5,
  rotationSpeedInHrs: 648,
  revolutionInDays: 27.3,
  radius: 1737.1,
  key: "moon",
  value: "moon",
  text: "Moon",
  picture: moon,
  distanceToPlanet: 384400,
  type: "satelite"
};

export const plutoObject = {
  tiltedAxis: 122.5,
  orbitTilt: 17,
  rotationSpeedInHrs: 153.6,
  revolutionInDays: 90560,
  radius: 1188.3,
  key: "pluto",
  value: "pluto",
  text: "Pluto",
  picture: pluto,
  distanceToSun: 5900000000,
  type: "planet"
};

export const skyObjects = {
  sun: sunObject,
  mercury: mercuryObject,
  venus: venusObject,
  earth: earthObject,
  mars: marsObject,
  jupiter: jupiterObject,
  saturn: saturnObject,
  uran: uranObject,
  neptune: uranObject,
  moon: moonObject,
  pluto: plutoObject
};
