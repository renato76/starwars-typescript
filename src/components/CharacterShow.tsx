import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CharacterProps } from './Characters'

interface RouteParams {
  id: string
}

const CharacterShow: React.FC<CharacterProps> = () => {
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
    <div>
      <h1>Character Show</h1>
      {character?.name}
    </div>
  )
}

export default CharacterShow
