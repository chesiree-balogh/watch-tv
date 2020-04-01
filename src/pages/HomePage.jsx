import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [shows, setShows] = useState([])
  const [randomShowIndex, setRandomShowIndex] = useState(0)

  useEffect(() => {
    // this is getting the information from the api
    fetch(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=d4391d907b2c900adc30385309aa156c&language=en-US&page=1'
    )
      .then((response) => response.json())
      .then((apiData) => {
        console.log('Got the data')
        console.log(apiData)

        const newShows = apiData.results
        setShows(newShows)

        const newRandomShowIndex = Math.floor(Math.random() * newShows.length)
        setRandomShowIndex(newRandomShowIndex)
      })
  }, [])

  // we want a random show from our array
  const randomShow = shows[randomShowIndex]

  return (
    <div>
      {randomShow ? (
        <>
          <div>
            <div>Featured TV Show</div>
            <ul>
              <li>{randomShow.name}</li>
            </ul>
          </div>
        </>
      ) : (
        <></>
      )}
      <ul>
        <li>Top Rated TV Shows</li>

        {shows.map((show) => {
          const urlForTheShow = `/tv/${show.id}`

          return (
            <li key={show.id}>
              <Link to={urlForTheShow}>{show.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default HomePage

// what i had before the three at me with Gavin

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import TvShow from '../components/TvShow'

// const HomePage = () => {
//   const [tvShows, setTvShows] = useState([])

//   //   componentDiDMount(){
//   // }

//   const getAllTvSHows = async () => {
//     const resp = await axios.get(
//       'https://api.themoviedb.org/3/tv/top_rated?api_key=d4391d907b2c900adc30385309aa156c&language=en-US&page=1'
//     )
//     console.log(resp.data)
//     setTvShows(resp.data.results)
//   }

//   useEffect(() => {
//     console.log('effectively working')
//     getAllTvSHows()
//   }, [])
//   ////////////////////////////////////
//   ////////////////////////////////////
//   ////////////////////////////////////
//   ////////////////////////////////////

//   return (
//     <>
//       <header class="MainTitle">
//         <h1>Help end COVID-19! </h1>
//         <h2>Stay home and binge these shows!</h2>
//       </header>
//       <header class="topshows">Top shows:</header>
//       <main>
//         <ul class="topshowslist">
//           {tvShows.map((tvShow) => {
//             return (
//               <TvShow name={tvShow.name} vote_average={tvShow.vote_average} />
//             )
//           })}
//         </ul>
//       </main>
//     </>
//   )
// }

// export default HomePage
