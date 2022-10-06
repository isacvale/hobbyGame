import React, { createContext, useContext, useState } from "react";

const CurrentDragContext = createContext();
const UpdateCurrentDragContext = createContext();

export const useCurrentDrag = () => [
  useContext(CurrentDragContext),
  useContext(UpdateCurrentDragContext),
];

export const CurrentDragProvider = ({ children }) => {
  const [currentDrag, setCurrentDrag] = useState(null);
  return (
    <CurrentDragContext.Provider value={currentDrag}>
      <UpdateCurrentDragContext.Provider value={setCurrentDrag}>
        {children}
      </UpdateCurrentDragContext.Provider>
    </CurrentDragContext.Provider>
  );
};
