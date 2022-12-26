import React from 'react';

const Contact = () => {
    return (
        <>
        <h2 id='contacto' style={{marginTop: 100}}>Contacto</h2>
        <section className='contact'>
            <form>
            <p>Nombre:</p>
            <input />

            <p>Email:</p>
            <input type={'email'} />

            <p>Asunto:</p>
            <input />

            <p>Mensaje:</p>
            <textarea />

            <button>Enviar</button>
            </form>
        </section>
        </>
    );
}

export default Contact;
