import React, { useState } from 'react'
import ContextCard from './ContextCard';

const ContextProfile = (props) => {
  return (
    <div className="m-2">
      ContextProfile
      <hr/>
      <ContextCard profile={props.profile}></ContextCard>
    </div>
  )
}

export default ContextProfile

