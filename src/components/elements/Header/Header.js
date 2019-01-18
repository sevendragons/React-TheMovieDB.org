import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = ({}) => {
  return (
    <div className="rmdb-header">
      <div className="rmdb-header-content">
        <Link to="/">
          <img src="./images/reactMovie_logo.png" alt="rmdb-logo" className="rmdb-logo"/>
        </Link>
        <a href="https://www.themoviedb.org" target="_blank">
          <img src="./images/tmdb_logo.png" alt="rmdb-tmdb-logo" className="rmdb-tmdb-logo"/>
        </a>
      </div>
    </div>
  );

}

export default Header;
