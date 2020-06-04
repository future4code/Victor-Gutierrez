import React, { useEffect, useState } from 'react';
import api from './../../Services/api';
import Loadinggif from './../../Assets/200.gif';
import { WhiteBackground, PokeDexCard, Container } from './pokemon_styles';
import { Link } from 'react-router-dom';

export default function Pokemon({
    match: {
        params: { id },
    },
}) {
    const [pokeData, setData] = useState<any>([]);
    const [pokeName, setName] = useState<string>('');
    const [loading, setLoad] = useState<boolean>(true);

    useEffect(() => {
        api.get(`pokemon/${id}`).then((response) => {
            setName(Capitalize(response.data.name));
            setData(response.data);
            setLoad(false);
        });
    }, []);

    const Capitalize = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const parseID = () => {
        if (id < 10) {
            return `00${id}`;
        } else if (id >= 10 && id < 100) {
            return `0${id}`;
        } else if (id > 99) {
            return id;
        }
    };

    const listenLoading = () => {
        if (loading === true) {
            return Loadinggif;
        } else {
            return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${parseID()}.png`;
        }
    };

    return (
        <Container>
            <PokeDexCard>
                <h1>{pokeName}</h1>
                <WhiteBackground>
                    <img src={listenLoading()} alt="" />
                </WhiteBackground>
                <p>Altura: {pokeData.height}</p>
                <p>Peso: {pokeData.weight}</p>
                <Link to="/">Voltar</Link>
            </PokeDexCard>
        </Container>
    );
}
