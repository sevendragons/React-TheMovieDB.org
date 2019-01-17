import React from 'react';
import PropTypes from 'prop-types';
import './MovieThumb.css'

const MovieThumb = (props) => {
  return (
    <div className="rmdb-moviethumb">
      <img src={props.image} alt={props.title}/>
      <p className="rmdb-textThumb">{props.title}</p>

    </div>
  );
}



export default MovieThumb;
