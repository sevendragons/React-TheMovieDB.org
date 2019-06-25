import React, {useState, useEffect} from 'react'

const Hook = ({initialCount}) => {
  let [state, setState] = useState({
    count: initialCount,
    user: 'Nicky'
  });

  const addOne = () => {
    setState( prevCount => {
      return prevCount + 1
    })
  }

  const minusOne = () => {
    setState( prevCount => {
      return prevCount - 1
    })
  }
  
  return (
    <div>
      <h2>{state.user}</h2>
      <h2>Count: {state.count}</h2>
      <button className="btn btn-info" onclick={addOne}>Add One</button>
      <button className="btn btn-warning" onclick={minusOne}>Minus One</button>
      <button className="btn btn-danger" onclick={() => setState(initialCount)}>Reset</button>
    </div>
  )
}

export default Hook
