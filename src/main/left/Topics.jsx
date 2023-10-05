/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import c from './Topics.module.css';

function Topics() {
    return (
      <div className={c.topics_block}>
        <div className={c.topic_block}>
          <img className={c.boll_pic} src='https://cdn-icons-png.flaticon.com/128/3243/3243480.png'></img>
          <p className={c.topic_text}>Спорт</p>
        </div>
        <div className={c.topic_block}>
          <img className={c.ticket_pic} src='https://cdn-icons-png.flaticon.com/128/175/175613.png'></img>
          <p className={c.topic_text}>Билеты в кино</p>
        </div>
        <div className={c.topic_block}>
          <img className={c.media_pic} src='https://cdn-icons-png.flaticon.com/128/7862/7862020.png'></img>
          <p className={c.topic_text}>Медиа</p>
        </div>
      </div>
    );
}

export default Topics; 