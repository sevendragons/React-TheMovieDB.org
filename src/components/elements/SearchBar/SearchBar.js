import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom';

import './SearchBar.css';

class SearchBar extends Component {
  state = {
    value: '',

  }
  timeout = null;


  doSearch = (event) => {
    this.setState({value: event.target.value})
    clearTimeout(this.timeout);

    this.timeout = setTimeout( () => {
      this.props.callback(this.state.value);

    }, 750)
  }

  render() {
    return (
      <div className="rmdb-searchbar">
        <div className="rmdb-searchbar-content">
          <FontAwesome className="rmdb-fa-search" name="search" size="2x"></FontAwesome>
          <input type="text" className="rmdb-searchbar-input"
            placeholder="Search Movie"
            onChange={this.doSearch}
            value={this.state.value}/>
        </div>

        <div className="rmdb-navigation" style={{borderRadius: '25px', marginTop: '12px'}}>
          <div className="rmdb-navigation-content">
            <Link style={{textDecoration: 'none'}} to="/PFiveJS"><a className="link">P5.js</a></Link>
          </div>
        </div>

      </div>
    );
  }

}

export default SearchBar;
// <Link style={{textDecoration: 'none', marginLeft: '12px'}} to="/PFiveJS2"><a className="link">P5.js 2</a></Link>
