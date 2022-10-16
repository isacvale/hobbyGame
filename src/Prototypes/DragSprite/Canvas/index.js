import React from "react";
import styled from "@emotion/styled";

import { CurrentDragProvider } from "../hooks/useCurrentDrag.js";
import { CurrentTargetTileProvider } from "../hooks/useCurrentTargetTile.js";

const StyledCanvas = styled.div({
  border: "3px solid gold",
  boxSizing: "border-box",
  position: "relative",
  width: "100%",
  height: "100vh",
  touchAction: "none",
});

const Canvas = (props) => {
  const [inDrag, setInDrag] = React.useState(false);
  const ref = React.useRef();

  const handleControlUp = (ev) => {
    console.log("handleControlUp");
    if (inDrag) {
      setInDrag(false);
    }
  };
  const handleControlMove = (ev) => {
    console.log("handleControlMove");
    if (inDrag) {
      inDrag.move({ x: ev.movementX, y: ev.movementY });
    }
  };

  return (
    <StyledCanvas
      ref={ref}
      {...props}
      onPointerUp={handleControlUp}
      onPointerMove={handleControlMove}
    />
  );
};

const FullCanvas = (props) => (
  <CurrentDragProvider>
    <CurrentTargetTileProvider>
      <Canvas {...props} />
    </CurrentTargetTileProvider>
  </CurrentDragProvider>
);

export default FullCanvas;
