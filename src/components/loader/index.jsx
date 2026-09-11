import React from 'react'

const Loader = () => {
  return (
    <div className="loader" role="status" aria-label="Loading">
      <div className="clapperboard">
        <div className="clapperboard__top">SCENE 01 / TAKE 01</div>
        <div className="clapperboard__body">
          <span>NETFLIX MOVIE</span>
          <strong>ACTION</strong>
        </div>
      </div>
      <span className="loader__text">Loading...</span>
    </div>
  )
}

export default Loader