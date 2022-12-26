import React from 'react';
import Card from './Card'

const CardContainer = () => {
    return (
        <>
        <h2 id='proyectos' style={{marginBottom: 20}}>Proyectos</h2>
        <section className='cardContainer'>
            <Card
            name={'Akira Encrypt'}
            desc={'Encriptador con la temática "Akira"'}
            img={'projects/akiraEncrypt.jpg'}
            badgeImg={'projects/encryptBadge.png'}
            />

            <Card
            name={'21th Century Hangman'}
            desc={'Hangman con con la tematica "20 Century Boys"'}
            img={'projects/hangman.jpg'}
            badgeImg={'projects/hangmanBadge.png'}
            />

            <Card
            name={'eMangas'}
            desc={'eCommerce de mangas con todas las funciones correspondientes'}
            img={'projects/eMangas.jpg'}
            badgeImg={'projects/eMangasBadge.png'}
            />

            {/*<Card
            name={'Brownlog'}
            desc={'Project for Odin Project'}
            img={'projects/brown.jpg'}
            />

            <Card
            name={'MovieClub'}
            desc={'Project for Coderhouse'}
            img={'projects/movie.jpg'}
            />*/}
        </section>
        </>
    );
}

export default CardContainer;
