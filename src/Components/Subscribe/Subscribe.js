import React from 'react';
import './subscribe.css';

function Subscribe() {
  return (
    <div className='sub-container'>
      <div className='sub-box'>
        <h2 className='title'>Subscribe</h2>
        <input type="email" className="email" pattern=".+@globex\.com" size="30" required />
          <button className='sub-btn'>Submit</button>
      </div>
    </div>
  )
}

export default Subscribe