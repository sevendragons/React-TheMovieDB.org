import React from 'react';
import PFiveJS from '../../P5/PFiveJS';
import Hook from '../../P5/Hook';
import ContextApp from '../../ContextAPI/ContextApp';

const NotFound = ({}) => {
  return (
    <div>
      {/* <PFiveJS/> */}
      <Hook/>
      <hr/>
      <ContextApp/>

      <h1 style={{textAlign: 'center', margin: '16px'}}>Uuh oh, 😥  Not Found this page - Check your link please!</h1>
    </div>
  );
}

export default NotFound;
