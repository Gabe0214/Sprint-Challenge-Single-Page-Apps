import React, { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import CharacterCard from './CharacterCard'
import SearchForm from './SearchForm'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get('https://rickandmortyapi.com/api/character/')
     .then(res => {
       
        setCharacter(res.data.results);
       
     })
     .catch(error => {
       console.error('Server Error', error); 
     })
  }, []); 
  

  return (
    <section className="character-list">
      {character.map(value => (
        <NavLink to ={`/characters/${value.id}`}>
        <CharacterCard name ={value.name} key={value.id} species={value.species} status={value.status}/>
        </NavLink>
      ))}
      
    </section>
  );
}
