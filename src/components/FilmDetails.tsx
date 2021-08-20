import React, { useState, useEffect } from 'react'

interface Props {
  films: string[] | undefined
}

const FilmDetails: React.FC<Props> = (props) => {
  const [filmDetailsList, setFilmDetailsList] = useState<any[]>([])

  useEffect(() => {
    async function getData() {
      const films = props.films
      const fetchFilms = await Promise.all(films?.map(url => fetch(url)) || [])
      const filmsData = await Promise.all(fetchFilms.map(response => response.json()))
      setFilmDetailsList(filmsData)
      // TODO: typescript quick shift for react
    }
    getData()
  }, [props.films])

  return (
    <div className="film-details-container">
      <div className="film-details-items">
        {filmDetailsList.map(film => (
          <p key={film.id}> - {film.title}</p>
        ))}
      </div>
    </div>
  )
}

export default FilmDetails
