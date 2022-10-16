import React from "react";
import styled from "@emotion/styled";
import Draggable from "react-draggable";

import { useCurrentDrag } from "../hooks/useCurrentDrag.js";

const StyledPiece = styled.div(({ position }) => ({
  backgroundColor: "wheat",
  borderRadius: 16,
  height: "6em",
  margin: 16,
  padding: 16,
  position: "absolute",
  // transition: "translate 0.1s",
  // translate: `${position.x}px ${position.y}px`,
  width: "6em",
}));

const Piece = ({
  children,
  // id,
  // position: defaultPosition = { x: 200, y: 200 },
}) => {
  // const [position, setPosition] = React.useState(defaultPosition);
  // const [_, setCurrentDrag] = useCurrentDrag();

  // const move = (movement) =>
  //   setPosition({
  //     x: position.x + movement.x,
  //     y: position.y + movement.y,
  //   });
  // const handleControlDown = (ev) => {
  //   console.log("handleControlDown");
  //   setCurrentDrag({ id, move });
  // };

  return (
    <Draggable>
      <StyledPiece>
        {/* <StyledPiece onPointerDown={handleControlDown} position={position}> */}
        {children}
      </StyledPiece>
    </Draggable>
  );
};

// const Piece = ({ position: defaultPosition = { x: 200, y: 200 } }) => {
//   const [position, setPosition] = React.useState(defaultPosition);

//   const ref = React.useRef();
//   const [currentDrag, setCurrentDrag] = useCurrentDrag();

//   const onDragStart = () => {
//     console.log("drag start");
//     setCurrentDrag(ref);
//   };
//   const onDrag = () => {
//     console.log("onDrag");
//   };
//   const onDragEnd = () => {
//     console.log("drag end");
//     // console.log({ currentDrag });
//   };

//   const onMove = () => {
//     setPosition({ x: 800, y: 600 });
//   };

//   React.useEffect(() => {
//     if (ref.current) ref.current.dataset.onMove = onMove;
//   }, [ref]);

//   return (
//     <StyledPiece
//       position={position}
//       // draggable
//       // draggable
//       onDragStart={onDragStart}
//       onDragEnd={onDragEnd}
//       onDrag={onDrag}
//       ref={ref}
//       onDragStart={onDragStart}
//       onDragEnd={onDragEnd}
//       onDrag={onDrag}
//       ref={ref}
//     >
//       tile
//     </StyledPiece>
//   );
// };

export default Piece;
