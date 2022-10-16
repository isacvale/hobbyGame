import React from "react";
import styled from "@emotion/styled";

import DragSprite from "./Prototypes/DragSprite/index.js";
import DragToTile from "./Prototypes/DragToTiles/index.js";

const protos = {
  none: () => null,
  DragSprite,
  DragToTile,
}

const Layout = styled.div({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
})

const StyledSelect = styled.div({
  alignSelf: 'start',
  background: '#f8f8f8',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  height: 'calc(100vh - 32px)',
  padding: 16,
})

const StyledButton = styled.button(({selected}) => ({
  background: selected ? 'purple' : 'orange',
  border: 'none',
  borderRadius: 8,
  boxShadow: selected ? '0 0 0 2px purple' : 'none',
  color: 'white',
  cursor: 'pointer',
  fontWeight: 700,
  padding: '8px 16px',
}))

const App = () => {
  const [proto, setProto] = React.useState('none')
  const handleChange = ({ target: {value}}) => {
    setProto(value)
  }
  return ( 
  <Layout>
    <StyledSelect>
      {Object.keys(protos).map(key => (
        <StyledButton selected={key === proto} value={key} key={key} onClick={() => setProto(key)}>{key}</StyledButton>
      ))}
    </StyledSelect>
    {protos[proto]()}
  </Layout>
)}

export default App;
