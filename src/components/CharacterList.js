import React, { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import CharacterCard from './CharacterCard'
import SearchForm from './SearchForm'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
 const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get('https://rickandmortyapi.com/api/character/')
     .then(res => {
       console.log(res)
       setCharacter(res.data.results)
       
       const results = character.filter(value => 
        value.toLowerCase().includes(searchTerm.toLowerCase())


       );
       setSearchResults(results)
     })
     .catch(error => {
       console.error('Server Error', error); 
     })
  }, [searchTerm]); 

  const handleChange = event => {
    setSearchTerm(event.target.value)
    console.log(event.target.value);
  }

  return (
    <section className="character-list">
      <input type ="text" id="name" placeholder="Search" value={searchTerm} onChange={handleChange}/>
      {character.map(value => (
        <NavLink to ={`/characters/${value.id}`}>
        <CharacterCard value ={value} key={value.id}/>
        </NavLink>
      ))}
      
    </section>
  );
}
