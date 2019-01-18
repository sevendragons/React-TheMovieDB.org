import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css'

// import PropTypes from 'prop-types';

const Navigation = (props) => {
  return (
    <div className="rmdb-navigation">
      <div className="rmdb-navigation-content">
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>/ {props.movie}</p>
      </div>
    </div>
  );
}

// Navigation.propTypes = {
//   : PropTypes.
// };

export default Navigation;
