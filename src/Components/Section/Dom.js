import React, { useRef, useEffect, useMemo } from "react";
import ReactDom from "react-dom";
import { Vector3, CSS3DRenderer } from "three";
import { CSS2DObject } from "react-three-fiber";

const Dom = props => {
  // Create the parent element
  // This element is where React will render in (1)
  // And also, the element we wrap into an instance of CSS2DObject (2) to finally add it to the scene graph. (3)
  const container = useRef(document.createElement("div"));
  // (2) Wrap container element to CSS2DObject
  const cssObject = useRef(new CSS2DObject(container.current));
  useEffect(() => {
    // (1) Render to container element
    ReactDom.render(<>{props.children}</>, container.current);
  }, [props.children]);
  // We must provide a Vector3 position to <primitive> (even tho it's a 2d information; vector2)
  const vector3Position = useMemo(
    () => new Vector3(props.position[0], props.position[1], 0),
    [props.position[0], props.position[1]]
  );
  // (3) Add to scene
  return useMemo(
    () => <primitive object={cssObject.current} position={vector3Position} />,
    [vector3Position]
  );
};

export default Dom;
