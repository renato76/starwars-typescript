import React, { useState, useEffect } from 'react'
import './App.css'
import Pokemon from './components/Pokemon'  

const apiUrl = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"

function App(props: any) {
  const [pokemon, setPokemon] = useState([])

  async function getPokemon() {
    const response = await fetch(apiUrl)
    const data = await response.json()
    const poke = data.results
    setPokemon(poke)
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <div className="App">
      <Pokemon pokemon={pokemon}/>
    </div>
  )
}

export default App
