import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FilmDetails from './FilmDetails'
import { CharacterProps } from '../../src/types/CharacterProps'

interface RouteParams {
  id: string
}

const CharacterShow: React.FC<CharacterProps> = (props) => {
  const [character, setCharacter] = useState<CharacterProps>()
  const { id } = useParams<RouteParams>()

  useEffect(() => {
    const getCharacter = async () => {
      const response = await fetch(`https://swapi.dev/api/people/${id}`)
      const data = await response.json()
      setCharacter(data)
    }
    getCharacter()
  }, [id])

  return (
    <>
      <div className="show-container">
        <div className="show-title">
          <h1>{character?.name}</h1>
        </div>
        <div className="show-person-info">
          <div className="person-info-items">
            <h3>Height: {character?.height}</h3>
          </div>
          <div className="person-info-items">
            <h3>Eye Colour: {character?.eye_color}</h3>
          </div>
          <div className="person-info-items">
            <h3>Birth Date: {character?.birth_year}</h3>
          </div>
          <div className="person-info-items">
            <h3>Hair Colour: {character?.hair_color}</h3>
          </div>
        </div>
      </div>
      <div className="films-container">
        <div className="films-title">
          <h3>{character?.films?.length} Films</h3>
        </div>
        <div className="films-details">
          <FilmDetails films={character?.films} />
        </div>
    </div>
    </>
  )
}

export default CharacterShow
