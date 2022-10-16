import React from "react";
import styled from "@emotion/styled";

const StyledWrapper = styled.div({
    display: 'grid',
    gap: 16,
    gridTemplateColumns: 'repeat(3, 1fr)',
    width: 'fit-content',
})

const Board = ({ children}) => {
    return (<StyledWrapper>{children}</StyledWrapper>)
}

export default Board