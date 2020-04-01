import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TVShowPage = (props) => {
  const showId = props.match.params.showId

  // const cast = []
  const [cast, setCast] = useState([])
  // const crew = []
  const [crew, setCrew] = useState([])

  const [details, setDetails] = useState({})

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=d4391d907b2c900adc30385309aa156c&language=en-US`

    axios.get(url).then((creditsResponse) => {
      const creditsApiData = creditsResponse.data

      const newCast = creditsApiData.cast
      const newCrew = creditsApiData.crew

      setCast(newCast)
      setCrew(newCrew)
    })

    const detailsUrl = `https://api.themoviedb.org/3/tv/${showId}?api_key=d4391d907b2c900adc30385309aa156c&language=en-US`
    axios.get(detailsUrl).then((detailsResponse) => {
      const detailsApiData = detailsResponse.data

      setDetails(detailsApiData)
    })
  }, [showId])

  return (
    <div>
      <h1>{details.name}</h1>

      <ul>
        <li>Cast</li>
        {cast.map((person) => {
          return <li key={person.id}>{person.name}</li>
        })}
      </ul>
      <ul>
        <li>Crew</li>
        {crew.map((person) => {
          return <li key={person.id}>{person.name}</li>
        })}
      </ul>
    </div>
  )
}

export default TVShowPage
