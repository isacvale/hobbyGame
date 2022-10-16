import React from "react";

import Piece from "./Piece/index.js";
import Tile from "./Tile/index.js";
import Canvas from "./Canvas/index.js";
import Sprite from "./Sprite/index.js";

import Draggable from "react-draggable";

import { useCurrentTargetTile } from "./hooks/useCurrentTargetTile.js";
const MonitorState = () => {
  const [targetTile] = useCurrentTargetTile();

  return (
    <div>
      <div>targetTile: {targetTile}</div>
    </div>
  );
};

const DragSprite = () => (
  <Canvas>
    <Draggable>
      <div style={{ position: "absolute" }}>
        <Sprite />
      </div>
    </Draggable>
  </Canvas>
);

export default DragSprite;
