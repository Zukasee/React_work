/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Topics.css';

function Topics() {
    return (
      <div className='topics_block'>
        <div className='topic_block'>
          <img className='boll_pic' src='https://cdn-icons-png.flaticon.com/128/3243/3243480.png'></img>
          <p className='topic_text'>Спорт</p>
        </div>
        <div className='topic_block'>
          <img className='ticket_pic' src='https://cdn-icons-png.flaticon.com/128/175/175613.png'></img>
          <p className='topic_text'>Билеты в кино</p>
        </div>
        <div className='topic_block'>
          <img className='media_pic' src='https://cdn-icons-png.flaticon.com/128/7862/7862020.png'></img>
          <p className='topic_text'>Медиа</p>
        </div>
      </div>
    );
}

export default Topics; 