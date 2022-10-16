import React from "react";
import styled from "@emotion/styled";
import Piece from "../Piece";

const StyledTile = styled.div({
    background: 'lavender',
    boxSizing: 'border-box',
    borderRadius: 16,
    height: '16vmin',
    position: 'relative',
    width: '16vmin',
})

const Tile = ({ piece: Piece }) => {
    return (<StyledTile>{Piece}</StyledTile>)
}

export default Tile