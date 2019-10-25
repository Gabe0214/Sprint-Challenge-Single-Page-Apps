import React from "react";
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const ImgContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center; 

`

export const NavContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin-top: 2rem;
margin-bottom: 2rem;



`


export const NavStyle = styled(NavLink)`

padding: 0.5rem 1.2rem; 
border: none;
border-radius: 5px;
background: green; 
text-decoration: none;
color:#fff;
margin-right: 1rem;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <ImgContainer>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        </ImgContainer>
        <NavContainer>
        <NavStyle to ="/characters">Character List</NavStyle>
        <NavStyle to ="/search">Search</NavStyle>
        </NavContainer> 
      </header>
    </section>
  );
}
