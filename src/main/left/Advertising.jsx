import React from 'react';
import c from './Advertising.module.css';
import { Link } from 'react-router-dom';

function Advertising() {
    return (
      <div className={c.advertising_block}>
        <p><Link to='/help'>Тут может быть и ваша реклама</Link></p> 
      </div>
    );
  }

export default Advertising;