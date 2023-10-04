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
            <Moon />
            <Barbie />
            <Oppengamer />
            <Povelitel_vetra />
        </div>        
      </div>
    );
}

export default Right; 