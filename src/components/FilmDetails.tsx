import React from 'react'

interface Props {
  films: string[] | undefined
}

const FilmDetails: React.FC<Props> = (props) => {
  
  // 1. Send a fetch request to each url 
  async function getData() {
    const films = props.films
    console.log(films)
    const fetchFilms = await Promise.all(films!.map(url => fetch(url)))
    console.log(fetchFilms)
  }
  getData()
  // 2. get the name of each film

  return (
    <div className="film-details-container">
      <div className="film-details-items">
        <h1>Film 1</h1>
      </div>
      <div className="film-details-items">
        <h1>Film 2</h1>
      </div>
      <div className="film-details-items">
        <h1>Film 3</h1>
      </div>
    </div>
  )
}

export default FilmDetails
