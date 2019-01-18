import React from 'react';
import {Link} from 'react-router-dom';
import './HeroImage.css'

const HeroImage = ({movieId, movieName, title, text, image}) => {
  return (
    <Link to={{ pathname: `/${movieId}`, movieName: `${movieName}` }}>
      <div className="rmdb-heroImage"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0) 39%,rgba(0,0,0,0) 41%,rgba(0,0,0,0.65) 100%), url('${image}'), #1c1c1c`
        }}>
        <div className="rmdb-heroimage-content">
          <div className="rmdb-heroimage-text">
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default HeroImage;
