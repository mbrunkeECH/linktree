import React, { useState } from "react";
import './ShowsList.css';



//assets
import soundkick from '../../assets/icons/by-songkick-wordmark.svg'
import arrow from '../../assets/icons/arrow.svg'

const ShowsList = ({ Shows }) => {
  const upcoming = Shows.upcoming;
  return (
    <div className="showsList" data-testid="showsContainer">
      {
        upcoming && upcoming.map(show => (
          // TODO: change key to a UUID
          <a href={show.url} target="_blank" key={show.date} rel="noreferrer">
            <div className="show">
              <div>
                <p className="date">{show.date}</p>
                <p className="location">{show.location}</p>
              </div>
              {show.soldOut ? (<p className="sold">sold out</p>) : (<img src={arrow} alt="" className="arrow" />)}
            </div>
          </a>
        ))
      }
      <div className="logo">
        <img src={soundkick} alt="soundkick-logo" aria-label="soundkick-logo" />
      </div>
    </div >

  )
}


export default ShowsList