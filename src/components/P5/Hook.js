import React, {useState, useEffect} from 'react'
import UseRedux from './useRedux';


const Hook = ({initialCount}) => {
  let [count, setCount] = useState(initialCount);
  let [posts, setPosts] = useState([
    {
      name: 'Nicky',
      body: 'Nicky"s body'
    }
  ])


  const addOne = () => {
    setCount( prevCount => {
      return prevCount + 1
    })
  }

  const minusOne = () => {
    setCount( prevCount => {
      return prevCount - 1
    })
  }

  const addPost = () => {
    let newPost = {
        name: 'number 2',
        body: 'body number 2'
      }

    setPosts([
      ...posts,
      newPost
    ])
  }

  const removePost = () => {
    setPosts([])
  }
  
  return (
    <div className="m-3">
      <UseRedux initialCount={0}/>
      {/* <h2>Count: {count}</h2> */}
      {/* <button className="btn-sm btn-info mx-2" onClick={addOne}>Add One ➕</button>
      <button className="btn-sm btn-warning mx-2" onClick={minusOne}>Minus One ➖</button>
      <button className="btn-sm  btn-danger mx-2" onClick={() => setCount(initialCount)}>Reset</button> */}
      <hr/>

      { posts.map( (post, i) => (
        <div key={i}>
          <div>Name: {post.name}</div>
          <div>Name: {post.body}</div>
        </div>
      ) )}

      <button className="btn-sm btn-primary m-2" onClick={addPost}>Add Post</button>
      <button className="btn-sm btn-danger m-2" onClick={removePost}>Remove Post</button>

    </div>
  )
}

export default Hook
