import React, {useReducer} from 'react'

function reducer(state, action) { 
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    case 'clear':
      return {count: action.payload}
    default:
      throw new Error();
  }
 }

const useRedux = ({initialCount}) => {
  const initialState = {count: initialCount}
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button className="btn-sm btn-info mx-2" onClick={() => dispatch({type: 'increment'})}>Add One ➕</button>
      <button className="btn-sm btn-warning mx-2" onClick={() => dispatch({type: 'decrement'})}>Minus One ➖</button>
      <button className="btn-sm  btn-danger mx-2" onClick={() => dispatch({type: 'clear', payload: initialCount})}>Reset</button>
    </div>
  )
}

export default useRedux
