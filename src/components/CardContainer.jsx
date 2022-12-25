import React from 'react';
import Card from './Card'

const CardContainer = () => {
    return (
        <>
            <Card
            name={'Akira Encrypt'}
            desc={'Project for Alura Next Education'}
            img={'projects/akiraEncrypt.jpg'}
            badgeImg={'projects/encryptBadge.png'}
            />

            <Card
            name={'21th Century Hangman'}
            desc={'Project for Alura Next Education'}
            img={'projects/hangman.jpg'}
            badgeImg={'projects/hangmanBadge.png'}
            />

            <Card
            name={'eMangas'}
            desc={'Project for Odin Project'}
            img={'projects/eMangas.jpg'}
            badgeImg={'projects/eMangasBadge.png'}
            />

            <Card
            name={'Brownlog'}
            desc={'Project for Odin Project'}
            img={'projects/brown.jpg'}
            />

            <Card
            name={'Movie'}
            desc={'Project for Coderhouse'}
            img={'projects/movie.jpg'}
            />
        </>
    );
}

export default CardContainer;
