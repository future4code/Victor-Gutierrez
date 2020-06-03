import React from 'react';
import { Link } from 'react-router-dom';

export default function notFound() {
    return (
        <>
            <iframe
                width={1000}
                height={500}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <h3>
                404 - Ok ! Isto é um problema técnico, ouça uma música enquanto
                espera
            </h3>
            <Link to="/">Voltar para página inicial</Link>
        </>
    );
}
