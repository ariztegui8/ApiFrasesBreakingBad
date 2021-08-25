import React from 'react';
import styled from "@emotion/styled";

const ContenedorFrase = styled.div`
    padding: 20px;
    max-width: 800px;
    color: #fff;
    text-align: center;
`

const Frase = ({frase}) => {

    //Si un objeto tiene informacion dentro
    if(Object.keys(frase).length === 0) return null;

    return (
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>{frase.author}</p>
        </ContenedorFrase>
    )
}

export default Frase
