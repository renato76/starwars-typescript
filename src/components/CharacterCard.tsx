import React from 'react'
import { Link } from 'react-router-dom'
import { CharacterProps } from '../../src/types/CharacterProps'

const CharacterCard: React.FC<CharacterProps> = (props) => {
  const { id, name, height, birth_year: birthYear, films } = props
  // console.log('props >>>', props)
  return (
      <div className="card">
        <Link to={`/person/${id}`} > 
          <div className="card-info">
            <h1>{name}</h1>
            <h3>Height: {height} cm</h3>
            <h3>Birth Year: {birthYear}</h3>
            <h3>{films?.length} Films</h3>
          </div>  
        </Link>
      </div>
  )
}

export default CharacterCard


