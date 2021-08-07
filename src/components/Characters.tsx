import React, { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'


const apiUrl = "https://swapi.dev/api/people"

export interface CharacterProps {
  name: string
  height: string
  birth_year: string
  films: string
  id: number
} 

const Character: React.FC<CharacterProps> = () => {
  const [characters, setCharacters] = useState([])

  async function getCharacters() {
    const response = await fetch(apiUrl)
    const data = await response.json()
    const char = data.results
    setCharacters(char)
  }

  useEffect(() => {
    getCharacters()
  }, [])
  console.log(characters)
  return (
    <>
      <div className="title">
        <h1>Star Wars Catalog</h1>
      </div>
      <div  className="card-container">
        {characters?.map((character, index ) => 
          <CharacterCard key={index} {...character}/>
        )}
      </div>
    </>
  )
}

export default Character

