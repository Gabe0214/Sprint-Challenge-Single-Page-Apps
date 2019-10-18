import React from "react";

 const CharacterCard = ({name, status, species}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p> Status: {status}</p>
      <p> Species: {species}</p>
    </div>
  )
}


export default CharacterCard 