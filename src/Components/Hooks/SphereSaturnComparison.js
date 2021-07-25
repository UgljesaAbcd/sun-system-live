import React, { useRef } from "react";
import { TextureLoader, Vector3, DoubleSide } from "three";
import { useFrame } from "react-three-fiber";

const SphereSaturnComparison = ({
  providedPosition = [0, 0, 0], // position relative to parent object
  timeSpeed = 1, // speed of time used for speed up animation
  tiltedAxis = 360, // tilt of axis regarding to orbit
  hrsForRotation = 0, // rotation speed of planet in hours
  radius = 0.7, // radius of planet
  picture,
  widthSegments = 30, // one segment of sphere dim
  heightSegments = 30 // one segment of sphere dim
}) => {
  // ref for mesh (planet and orbit)
  const planetMesh = useRef();
  const ringMesh = useRef();

  // loader that wil load texture for mesh (planet)
  const loader = new TextureLoader();
  const planetTexture = loader.load(picture);
  const ringsLoader = loader.load(
    "https://i.postimg.cc/zz7Gr430/saturn-rings-top.png"
  );

  // tilt of planet axis
  const radians = (tiltedAxis * Math.PI) / 180;
  const radiansRing = ((270 + tiltedAxis) * Math.PI) / 180;
  // speed of rotation of planet in 10th part of second
  const andleRotationPms = (360 / (hrsForRotation * 3600000)) * timeSpeed;
  // const andleRotationPms = 0.36;
  const speedRotation = (andleRotationPms * Math.PI) / 180;

  const innerRadius = radius * 1.2804;
  const outerRadius = radius * 2.3488;

  // this is vector that defines rotation direction and is same for all planets
  let saturnAxisNormalized = new Vector3(0, 1, 0).normalize();
  let saturnRingAxisNrd = new Vector3(0, 0, 1).normalize();

  useFrame(() => {
    if (planetMesh && planetMesh.current && planetMesh.current.position) {
      planetMesh.current.rotateOnAxis(saturnAxisNormalized, speedRotation * 15);
      ringMesh.current.rotateOnAxis(saturnRingAxisNrd, speedRotation * 15);
    }
  });

  const vertexShader = `
    uniform float innerRadius;
    uniform float outerRadius;

    varying vec3 localPosition;
    
    void main() {
      localPosition = position;
      vec3 viewPosition = (modelViewMatrix * vec4(localPosition, 1.)).xyz;
      gl_Position = projectionMatrix * vec4(viewPosition, 1.);
    }
  `;

  const fragmentShader = `
    uniform sampler2D myTexture;
    uniform float innerRadius;
    uniform float outerRadius;

    varying vec3 localPosition;

    vec4 color() {
      vec2 uv;
      uv.x = (length(localPosition) - innerRadius) / (outerRadius - innerRadius);
      if (uv.x < 0.0 || uv.x > 1.0) {
        discard;
      }
      
      vec4 pixel = texture2D(myTexture, uv);
      return pixel;
    }

    void main() {
      gl_FragColor = color();
    }
  `;

  return (
    <group>
      <mesh
        ref={planetMesh}
        rotation={[radians, 0, 0]}
        position={providedPosition}
      >
        <sphereBufferGeometry
          args={[radius, widthSegments, heightSegments]}
          attach="geometry"
        />
        <meshStandardMaterial map={planetTexture} />
      </mesh>
      <mesh
        ref={ringMesh}
        rotation={[radiansRing, 0, 0]}
        position={providedPosition}
      >
        <ringGeometry attach="geometry" args={[innerRadius, outerRadius, 64]} />
        <shaderMaterial
          attach="material"
          args={[
            {
              uniforms: {
                myTexture: { value: ringsLoader },
                innerRadius: { value: innerRadius },
                outerRadius: { value: outerRadius }
              },
              vertexShader: vertexShader,
              fragmentShader: fragmentShader
            }
          ]}
          side={DoubleSide}
          transparent={true}
        />
      </mesh>
    </group>
  );
};

export default SphereSaturnComparison;
