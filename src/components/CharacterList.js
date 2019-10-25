import React, { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import CharacterCard from './CharacterCard'
import SearchForm from './SearchForm'
import styled from 'styled-components'


const NavStyle = styled(NavLink)`
text-decoration: none;
color: #333;
`
const LinkStyle = styled(NavLink)`
padding: 0.5rem 1.2rem; 
border: none;
border-radius: 5px;
background: green; 
text-decoration: none;
color:#fff;
margin-right: 1rem;

`

const NavContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin-top: 2rem;



`


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
      <NavContainer>
      <LinkStyle to ='/'>Home</LinkStyle>
      <LinkStyle to ='/search'>Search</LinkStyle>
      </NavContainer>
      {character.map(value => (
        <NavStyle to ={`/characters/${value.id}`}>
        <CharacterCard name ={value.name} key={value.id} species={value.species} status={value.status}/>
        </NavStyle>
      ))}
      
    </section>
  );
}
