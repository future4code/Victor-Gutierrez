import React, { useState } from 'react';
import Cadastro from './../../Components/Cadastro/cadastro';
import Lista from '../../Components/Lista/lista';

export default function Homepage() {
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <div>
            <h1>LabeUser</h1>
            <a href="#" onClick={() => setToggle(!toggle)}>
                Ver usuários cadastrados
            </a>
            {toggle === false ? <Cadastro /> : <Lista />}
        </div>
    );
}
