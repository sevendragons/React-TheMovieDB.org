import React, { Component } from 'react';
import './Header.css';

const Header = ({}) => {
  return (
    <div className="rmdb-header">
      <div className="rmdb-header-content">
        <img src="./images/reactMovie_logo.png" alt="rmdb-logo" className="rmdb-logo"/>
        <img src="./images/tmdb_logo.png" alt="rmdb-tmdb-logo" className="rmdb-tmdb-logo"/>
      </div>
    </div>
  );

}

export default Header;
