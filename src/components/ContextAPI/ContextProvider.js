import React, { Component } from 'react'
import MyContext from './Context';

export default class ContextProvider extends Component {
  state = {
    profile: {
      username: 'Francis',
      lastname: 'Le',
      age: 20
    }
  }
  render() {
    return (
      <MyContext.Provider
      value={{
        profile: this.state.profile,
        hey: () => {
          alert('hey')
        },
        incAge: () => {
          this.setState({
            profile: {
              ...this.state.profile,
              age: this.state.profile.age + 1
            }
          })
        },
        downAge: () => {
          this.setState({
            profile: {
              ...this.state.profile,
              age: this.state.profile.age - 1
            }
          })
        }
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
