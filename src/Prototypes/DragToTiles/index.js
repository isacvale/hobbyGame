import React from "react";
import styled from "@emotion/styled";

import Board from './Board'
import Tile from './Tile'
import Piece from './Piece'

const StyledCanvas = styled.div({
  alignItems: 'center',
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
})

const DragToTile = () => {
  return (
    <StyledCanvas>
      <Board>
        <Tile piece={<Piece type='cross' />} />
        <Tile />
        <Tile />
        <Tile />
        <Tile piece={<Piece type='times' />} />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </Board>
    </StyledCanvas>
  )
}

export default DragToTile