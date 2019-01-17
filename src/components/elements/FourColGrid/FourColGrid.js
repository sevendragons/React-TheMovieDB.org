import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './FourColGrid.css'


const FourColGrid = (props) => {
  const renderElements =  () => {
    const gridElements = props.children.map( (element, i ) => {
      return(
        <div className="rmdb-grid-element" key={i}>
          {element}
        </div>
      )
    })
    return gridElements;
  }

  return (
    <div className="rmdb-grid">
      { props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div className="rmdb-grid-content">
        {renderElements()}
      </div>
    </div>
  )
}

// FourColGrid.propTypes = {
//   : PropTypes.
// };

export default FourColGrid;
