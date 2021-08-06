import React, { useState, useEffect } from 'react'
// import { Link, BrowserRouter } from 'react-router-dom'

import { PokemonProps } from './Pokemon'

const PokemonCard: React.FC<PokemonProps> = ( props: any ) => {
  const [singlePokemon, setSinglePokemon] = useState()
  

  useEffect(() => {
    async function getSinglePokemon() {
      const singlePokemon = props.url
      const response = await fetch(singlePokemon)
      const data = await response.json()
      console.log(data)
      const id = data.id
      console.log(id)
      setSinglePokemon(id)
    }
    getSinglePokemon()
  }, [props.url])

  return (
    <div>
      {/* <BrowserRouter>
        <Link to={`/pokemon/${pokemon}`} />
      </BrowserRouter> */}
      <h1>Poke</h1>
      {singlePokemon}
    </div>
  )
}

export default PokemonCard

