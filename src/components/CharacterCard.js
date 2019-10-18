import React from "react";

 const CharacterCard = props => {
  return (
    <div key ={props.id}>
      <h2>{props.value.name}</h2>
      <p> Status: {props.value.status}</p>
      <p> Species: {props.value.species}</p>
    </div>
  )
}


export default CharacterCard 