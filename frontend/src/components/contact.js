import React from 'react';

function Contact() {
    return (
        <div>
            <h1>Contacto</h1>
            <form>
                <label>Nombre</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />
                <label>Mensaje</label>
                <textarea></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Contact;
