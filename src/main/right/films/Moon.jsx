import React from 'react';
import './Films.css';

function Moon(props) {
    return (
      <div className='moon_block'>
        <div className='moon_poster'>
          <div className='rate'>{props.rate}</div>
        </div>
        <p className='main_text'>Луна</p> 
        <p className='second_text'>2023, фантастика</p>
      </div>
    );
}

export default Moon; 