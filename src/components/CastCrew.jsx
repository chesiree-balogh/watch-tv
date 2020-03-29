import React from 'react'

const CastCrew = (props) => {
  const { name, vote_average } = props
  return (
    <div>
      <li>
        {/* backdrop_path AKA the image */}
        {/* <img src="" alt="" /> */}
        {/* name AKA show name */}
        <p>{name}</p>
        {/* vote_average AKA shows rating */}
        <p>Viewer rating: {vote_average}</p>
      </li>
    </div>
  )
}

export default CastCrew
