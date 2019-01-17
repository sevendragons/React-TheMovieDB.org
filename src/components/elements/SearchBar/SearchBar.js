import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'
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
      </div>
    );
  }

}

export default SearchBar;
