import React, { useState } from 'react';
import Cadastro from './../../Components/Cadastro/cadastro';
import Lista from '../../Components/Lista/lista';

export default function Homepage() {
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <div>
            <h1>LabeUsers</h1>
            {toggle === false ? <Cadastro /> : <Lista />}
            <a href="#" onClick={() => setToggle(!toggle)}>
                {toggle === false ? 'Ver usuários cadastrados' : 'Voltar'}
            </a>
        </div>
    );
}
