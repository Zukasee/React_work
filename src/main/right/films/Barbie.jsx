import React from 'react';

function Barbie(props) {
    return (
      <div className='barbie_block'>
        <div className='barbie_poster'>
            <div className='rate'>{props.rate}</div>
        </div>
        <p className='main_text'>Браби</p> 
        <p className='second_text'>2023, комедия</p>
      </div>
    );
}

export default Barbie; 