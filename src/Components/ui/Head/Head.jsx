import React from 'react';
import './Head.css'


const Head = (props) => {
  return (
    <div className='custom-head'>
        {props.children}
    </div>
  )
}

export default Head