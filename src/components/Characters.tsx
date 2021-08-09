import React, { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'

const apiUrl = "https://swapi.dev/api/people"

export interface CharacterProps { 
  name: string
  height: string
  birth_year: string
  id: number
  eye_color: string
  hair_color: string
  films: string | undefined
}

const Character: React.FC<CharacterProps> = () => {
  const [characters, setCharacters] = useState<CharacterProps[]>([])

  async function getCharacters() {
    const response = await fetch(apiUrl)
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
      <div className="title">
        <h1>Star Wars Catalog</h1>
      </div>
      <div  className="card-container">
        {characters?.map((character, index) => 
          <CharacterCard key={index} {...character} />
        )}
      </div>
    </>
  )
}

export default Character

