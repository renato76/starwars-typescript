import React, { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'

const apiUrl = "https://swapi.dev/api/people"

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState([])

  async function getCharacters() {
    const response = await fetch(apiUrl)
    console.log(response)
    const data = await response.json()
    const results = data.results
    console.log(results)

    // add an id to each character
    for (let i = 0; i < results.length; i++) {
      const character = results[i]
      character.id = i + 1
    }
    setCharacters(results)
  }
  useEffect(() => {
    getCharacters()
  }, [])
  
  return (
    <>
      <div  data-testid="test-characters" className="title">
        <h1>Star Wars Catalog</h1>
      </div>
      <div className="card-container">
        {characters?.map((character, index) => 
          <CharacterCard key={index} {...character} />
        )}
      </div>
    </>
  )
}

export default Characters

