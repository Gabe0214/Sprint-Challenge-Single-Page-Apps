import React, {useState, useEffect} from 'react'
import axios from 'axios'




export default function SearchForm() {
  const [characters, setCharacters] = useState([])
 const [searchTerm, setSearchTerm] = useState("")
 const [searchResults, setSearchResults] = useState([])

  useEffect (() => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {setCharacters(res.data.results)})
    
    
    const results = characters.filter(character => 
      character.includes(searchTerm.toLowerCase())
      
      )
      setSearchResults(results);
  }, [searchTerm])
 const handleChange = event => {
   setSearchTerm(event.target.value)
 }
  return (
    <section className="search-form">
     <form>
       <input type="text" name="characters" placeholder ="search" value ={searchTerm}
       onChange={handleChange}/>
     </form>
    </section>
  );
}