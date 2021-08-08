import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CharacterProps } from './Characters'

// interface RouteParams {
//   id: any
// }

const CharacterShow: React.FC<CharacterProps> = () => {
  const [character, setCharacter] = useState<any>()

  const { id } = useParams<any>()
  console.log('params >>>', id)

  useEffect(() => {
    const getCharacter = async () => {
      const response = await fetch(`https://swapi.dev/api/people/${id}`)
      // console.log(response)
      const data = await response.json()
      // console.log(data)
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
