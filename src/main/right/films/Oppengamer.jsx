import React from 'react';

function Oppengamer(props) {
    return (
        <div className='barbie_block'>
            <div className='oppengamer_poster'>
                <div className='rate'>{props.rate}</div>
            </div>
            <p className='main_text'>Оппенгеймер</p> 
            <p className='second_text'>2023, биография</p>
        </div>
    );
}

export default Oppengamer; 