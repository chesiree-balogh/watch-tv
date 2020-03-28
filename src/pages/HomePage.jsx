import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TvShow from '../components/TvShow'

const HomePage = () => {
  const [tvShows, setTvShows] = useState([])

  //   componentDiDMount(){
  // }

  const getAllTvSHows = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=d4391d907b2c900adc30385309aa156c&language=en-US&page=1'
    )
    console.log(resp.data)
    setTvShows(resp.data.results)
  }

  useEffect(() => {
    console.log('effectively working')
    getAllTvSHows()
  }, [])
  return (
    <>
      <header>
        <h1>Help end COVID-19! Stay home and binge these shows!</h1>
      </header>
      <main>
        <header>top shows</header>
        <ul>
          {tvShows.map((tvShow) => {
            return <TvShow />
          })}
        </ul>
      </main>
    </>
  )
}

export default HomePage
