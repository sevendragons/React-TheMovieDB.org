import React, {useContext} from 'react'
import MyContext from './Context';

const ContextCard = () => {
  const context = useContext(MyContext)  
  return (
    <div>
      <h4>Name: {context.profile.username}</h4>
      <h4>Last Name: {context.profile.lastname}</h4>
      <h4>Age: {context.profile.age}</h4>
      <button onClick={ () => context.hey() } 
        className="btn-sm btn-warning m-2">Alert</button>
      <button onClick={ () => context.incAge() } 
        className="btn-sm btn-info m-2">Add Age </button>
      <button onClick={ () => context.downAge() } 
        className="btn-sm btn-danger m-2">Down Age </button>



      {/* <MyContext.Consumer>
        { (context) => (
          <div className="m-3">
            <h4>Name: {context.profile.username}</h4>
            <h4>Last Name: {context.profile.lastname}</h4>
            <h4>Age: {context.profile.age}</h4>
            <button onClick={ () => context.hey() } 
              className="btn-sm btn-warning m-2">Alert</button>
            <button onClick={ () => context.incAge() } 
              className="btn-sm btn-info m-2">Add Age </button>
          </div>
        ) }
      </MyContext.Consumer> */}
    </div>

)
}

export default ContextCard
