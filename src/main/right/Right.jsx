/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Moon from './films/Moon';
import Barbie from './films/Barbie';
import Oppengamer from './films/Oppengamer.jsx';
import Povelitel_vetra from './films/Povelitel_vetra';

import './Right.css';

function Right() {
    return (
      <div className='right_block'>
        <p className='top_text'>Билеты в кино </p>
        <div className='slider'>
            <Moon rate='90%'/>
            <Barbie rate='6.7'/>
            <Oppengamer rate='8.5'/>
            <Povelitel_vetra rate='6.3'/>
        </div>        
      </div>
    );
}

export default Right; 