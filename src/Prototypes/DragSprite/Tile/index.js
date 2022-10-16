import React from "react";
import styled from "@emotion/styled";

import { useCurrentDrag } from "../hooks/useCurrentDrag.js";
import { useCurrentTargetTile } from "../hooks/useCurrentTargetTile.js";

const StyledTile = styled.div(({ position }) => ({
  border: "3px solid pink",
  borderRadius: 16,
  height: "10em",
  margin: 16,
  padding: 16,
  position: "absolute",
  width: "10em",
  translate: `${position.x}px ${position.y}px`,
}));

const Tile = ({ id, position = { x: 50, y: 50 } }) => {
  const [currentDrag] = useCurrentDrag();

  const [targetTile, setTargetTile] = useCurrentTargetTile();

  const onMouseEnter = () => {
    setTargetTile(id);
  };

  const onMouseLeave = () => {
    setTargetTile(null);
  };

  const onDragOver = (event) => {
    event.preventDefault();
    console.log("onDragOver");
  };
  const onDragEnter = (event) => {
    console.log("onDragEnter");
  };
  const onDragLeave = (event) => {
    console.log("onDragLeave");
  };
  const onDrop = (event) => {
    console.log("onDrop", currentDrag);
    currentDrag.current.style.scale = 1.5;
    currentDrag.current.dataset.onMove();

    // console.log("onDrop", event);
  };

  const ref = React.useRef();

  const onPointerDown = (e) => {
    ref.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <StyledTile
      // onDragOver={onDragOver}
      // onDragEnter={onDragEnter}
      // onDragLeave={onDragLeave}
      // onDrop={onDrop}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onPointerEnter={onMouseEnter}
      onPointerLeave={onMouseLeave}
      position={position}
      onPointerDown={onPointerDown}
    >
      container
    </StyledTile>
  );
};

export default Tile;
