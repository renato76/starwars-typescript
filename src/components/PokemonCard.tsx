import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PokemonProps } from './Pokemon'
// import styled from 'styled-components'


const PokemonCard: React.FC<PokemonProps> = ( props: any ) => {
  const [id, setId] = useState()
  const [singlePokemon, setSinglePokemon] = useState()
  console.log(props)

  useEffect(() => {
    async function getSinglePokemon() {
      const singlePokemon = props.url
      const response = await fetch(singlePokemon)
      const data = await response.json()
      console.log('pokemon data >>>', data)
      setSinglePokemon(data)
      const id = data.id 
      // console.log(id)
      setId(id)
    }
    getSinglePokemon()
  }, [props.url])

  return (
      <div className="card">
        <Link to={`/pokemon/${id}`}>
          {/* swap the div below for a new Component called PokemonShow and pass props down from singlePokemon*/}
          <div>{props.name}</div>
        </Link>
      </div>
  )
}

export default PokemonCard


