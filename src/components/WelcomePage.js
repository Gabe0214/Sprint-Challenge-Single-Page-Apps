import React from "react";
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const ImgContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center; 

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
        <NavLink to ="/characters">Character List</NavLink>
      </header>
    </section>
  );
}
