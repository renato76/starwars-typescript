import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PokemonProps } from './Pokemon'
import styled from 'styled-components'


const PokemonCard: React.FC<PokemonProps> = ( props: any ) => {
  const [singlePokemon, setSinglePokemon] = useState()
  console.log(props)

  useEffect(() => {
    async function getSinglePokemon() {
      const singlePokemon = props.url
      const response = await fetch(singlePokemon)
      const data = await response.json()
      console.log(data)
      const id = data.id 
      // console.log(id)
      setSinglePokemon(id)
    }
    getSinglePokemon()
  }, [props.url])

  return (
      <div className="card">
        <Link to={`/pokemon/${singlePokemon}`}>
          <div>{props.name}</div>
            {/* <p>{singlePokemon?.name}</p> */}

        </Link>
        {/* <h1>Poke</h1>
        {singlePokemon} */}
      </div>
  )
}

export default PokemonCard


