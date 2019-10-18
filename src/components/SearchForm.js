import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CharacterCard from './CharacterCard'




export default function SearchForm(props) {
  const [data, setData] = useState([])
  const [query, setQuery] = useState("")   
 
 useEffect(() => {
   axios.get("https://rickandmortyapi.com/api/character/")
   .then(response => {
     const character = response.data.results.filter(value =>
      value.name.toLowerCase().includes(query.toLowerCase())
      );
      setData(character)
   })
 },[query])
 
 const handleChange = event => {
   setQuery(event.target.value)
 }
  return (
    <section className="search-form">
     <form>
       <input type="text" id="name" placeholder ="search" value ={query}
       onChange={handleChange}/>
     </form>
     {data.map((value=> {
       return (
         <CharacterCard key ={value.id} name ={value.name} species ={value.species} status={value.status}/>
       )
     }))}
    </section>
  );
}









// How do I submit a form?

// What do I do after I submit the form?


// What am I trying to filter through? 

// console props