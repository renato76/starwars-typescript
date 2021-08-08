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

const Character: React.FC<CharacterProps> = (props) => {
  const [characters, setCharacters] = useState<any[]>([])

  // console.log(props)

  async function getCharacters() {
    const response = await fetch(apiUrl)
    const data = await response.json()
    const results = data.results
    console.log(results)
    for (let i = 0; i < results.length; i++) {
      const character = results[i]
      character.id = i + 1
    }
    setCharacters(results)
  }

  useEffect(() => {
    getCharacters()
  }, [])
  // console.log(characters)
  return (
    <>
      <div className="title">
        <h1>Star Wars Catalog</h1>
      </div>
      <div  className="card-container">
        {characters?.map((character: any, index: number) => 
          <CharacterCard key={index} {...character} />
        )}
      </div>
    </>
  )
}

export default Character

