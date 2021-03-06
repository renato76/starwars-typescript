import React, { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'

const apiUrl = "https://swapi.dev/api/people"

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<any[]>([])
  const [page, setPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    async function getCharacters() {      
      setLoading(true)
      const response = await fetch(`${apiUrl}/?page=${page}`)

      // 2. display those results as well as previous ones!
      const data = await response.json()
      const results = data.results
      console.log('load more >>>', results)
      
      const start = (page - 1) * results.length;

      const resultsWithId = results.map((char: any, i: number) => {
        return {
          ...char, 
          id: start + i + 1
        }
      })

      // Add an id to each character
      // for (let i = 0; i < results.length; i++) {
      //   const character = results[i]
      //   character.id = start + i + 1
      // }

      setCharacters([
        ...characters,
        ...resultsWithId
      ]);
      setLoading(false)
    }
    getCharacters()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  async function loadMore() {
    setPage((page) => page + 1)
  }
  
  return (
    <div className="homepage">
      <div data-testid="test-characters" className="title">
        <h1>Star Wars Catalog</h1>
      </div>

      <div className="card-container">
        {characters?.map((character, index) => 
          <CharacterCard key={index} {...character} />
        )}
      </div>
      <div className="load-more">
        {!loading && (
        <button 
            className="load-more-button"
            onClick={loadMore}
          >Load More ...
        </button>
        )}
        {loading && 'Loading...'}
      </div>
    </div>
  )
}

export default Characters

