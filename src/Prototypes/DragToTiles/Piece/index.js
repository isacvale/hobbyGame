import React from "react";
import styled from "@emotion/styled";

const types = {
    cross: '+',
    times: '×',
}

const StyledPiece = styled.div({
    fontSize: '12vmin',
    lineHeight: '12vmin',
    position: 'absolute',
    top: '2vmin',
    left: '2vmin',
})

const Piece = ({ type }) => {
    return (<StyledPiece>{types[type]}</StyledPiece>)
}

export default Piece