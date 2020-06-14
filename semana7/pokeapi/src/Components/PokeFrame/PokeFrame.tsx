import React, { useEffect, useState } from 'react';
import api from './../../Services/api';
import Loadinggif from '../../Assets/200.gif';
import { Card, WhiteBackground } from './PokeFrame_styles';
import { Link } from 'react-router-dom';

export default function PokeFrame(props: any): any {
    const [pokemon, getPokemon] = useState<any>([]);
    const [pokemonSprites, getSprite] = useState<any>([]);
    const [loading, setLoad] = useState<boolean>(true);
    const [pokeName, setName] = useState<string>('');

    useEffect(() => {
        api.get<any>(`${props.pokemonUrl}`).then((response) => {
            setName(Capitalize(response.data.name));
            getPokemon(response.data);
            getSprite(response.data.sprites);
            setLoad(false);
        });
    }, []);

    const parseID = () => {
        if (pokemon.id < 10) {
            return `00${pokemon.id}`;
        } else if (pokemon.id >= 10 && pokemon.id < 100) {
            return `0${pokemon.id}`;
        } else if (pokemon.id > 99) {
            return pokemon.id;
        }
    };

    const listenLoading: any = () => {
        if (loading === true) {
            return Loadinggif;
        } else {
            return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${parseID()}.png`;
        }
    };

    const Capitalize = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <Card>
            <div>
                <Link to={`/pokemon/${pokemon.id}`}>
                    <h3 style={{ color: 'black' }}>{pokeName}</h3>
                </Link>
            </div>
            <WhiteBackground>
                <img src={listenLoading()} alt={pokemonSprites.back_default} />
            </WhiteBackground>
        </Card>
    );
}
