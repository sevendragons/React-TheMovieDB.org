import React, { Component } from 'react'
import ContextProfile from './ContextProfile';
import ContextProvider from './ContextProvider';

export default class ContextApp extends Component {
  // state = {
  //   username: 'Francis',
  //   lastname: 'Le',
  //   age: 20
  // }
  render() {
    return (
      <ContextProvider>
        Context App
        {/* <ContextProfile profile={this.state}/> */}
        <ContextProfile />
      </ContextProvider>
    )
  }
}
