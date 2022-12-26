import React from 'react';
import Cuadro from './Cuadro'

const Skills = () => {
    return (
        <>
        <h2 id='skills' style={{marginBottom: 20}}>Skills</h2>
        <section className='skills'>
            <Cuadro 
            content={'HTML5'}
            logo={"fa-brands fa-html5"}
            />

            <Cuadro 
            content={'CSS3'}
            logo={"fa-brands fa-css3"}
            />

            <Cuadro 
            content={'JavaScript'}
            logo={"fa-brands fa-js"}
            />

            <Cuadro 
            content={'ReactJS'}
            logo={"fa-brands fa-react"}
            />

            <Cuadro 
            content={'Git'}
            logo={"fa-brands fa-git-alt"}
            />

            <Cuadro 
            content={'Java'}
            logo={"fa-brands fa-java"}
            />
        </section>
        </>
    );
}

export default Skills;
