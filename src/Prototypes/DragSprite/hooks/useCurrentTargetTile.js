import React, { createContext, useContext, useState } from "react";

const CurrentTargetTileContext = createContext();
const UpdateCurrentTargetTileContext = createContext();

export const useCurrentTargetTile = () => [
  useContext(CurrentTargetTileContext),
  useContext(UpdateCurrentTargetTileContext),
];

export const CurrentTargetTileProvider = ({ children }) => {
  const [currentTargetTile, setCurrentTargetTile] = useState(null);
  return (
    <CurrentTargetTileContext.Provider value={currentTargetTile}>
      <UpdateCurrentTargetTileContext.Provider value={setCurrentTargetTile}>
        {children}
      </UpdateCurrentTargetTileContext.Provider>
    </CurrentTargetTileContext.Provider>
  );
};
