import React from 'react';

const Cuadro = ({ content, logo }) => {
    return (
        <div className='cuadroSkill'>
            <i className={ logo } />
            <p>{ content }</p>
        </div>
    );
}

export default Cuadro;
