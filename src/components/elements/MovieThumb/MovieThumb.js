import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './MovieThumb.css';

const MovieThumb = ({clickable, movieId, movieName, image, title}) => {
  return (
    <div className="rmdb-moviethumb">
      {clickable ?
        <Link to={{ pathname: `/${movieId}`, movieName: `${movieName}` }}>
          <div>
            <img src={image} alt={title}/>
            <p className="rmdb-textThumb">{title}</p> :
          </div>
        </Link>
      :
        <div>
          <img src={image} alt={title}/>
          <p className="rmdb-textThumb">{title}</p>
        </div>

    }

    </div>
  );
}

// <Link to={{ pathname: `/${props.movieName}`, movieName: `${props.movieName}` }}>
MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  movieName: PropTypes.string

}

export default MovieThumb;
