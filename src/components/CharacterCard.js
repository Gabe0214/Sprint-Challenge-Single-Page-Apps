import React from "react";
import styled from 'styled-components'



const CardContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
`

 const CharacterCard = ({name, status, species, id}) => {
  return (
    <CardContainer key = {id}>
      <h2>{name}</h2>
      <p> Status: {status}</p>
      <p> Species: {species}</p>
    </CardContainer> 
  )
}


export default CharacterCard 