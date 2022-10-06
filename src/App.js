import React from "react";

import Piece from "./core/Piece/index.js";
import Tile from "./core/Tile/index.js";
import Canvas from "./core/Canvas/index.js";
import Sprite from "./core/Sprite/index.js";

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

const App = () => (
  <Canvas>
    <Draggable>
      <div style={{ position: "absolute" }}>
        <Sprite />
      </div>
    </Draggable>
  </Canvas>
);

export default App;
