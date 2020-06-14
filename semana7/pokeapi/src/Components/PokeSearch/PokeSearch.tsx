import React, { useState, useEffect } from 'react';
import api from '../../Services/api';
import PokeFrame from '../PokeFrame/PokeFrame';
import {
    Container,
    SearchArea,
    MobileText,
    DesktopText,
    Wrapper,
} from './PokeSearch_styles';

const PokeSearch = (props: any) => {
    const [everyPokemon, setAll] = useState<any>([]);
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        api.get<any>(`pokemon?offset=0&limit=787`).then((response) => {
            setAll(response.data.results);
        });
    }, []);

    const handleSearch = (e: any) => {
        setSearch(`${e.target.value}`);
    };

    const smartSearch = new RegExp(search, 'gi');

    return (
        <>
            <Wrapper>
                <SearchArea>
                    <MobileText>
                        Procure um Pokémon e arraste para o lado
                    </MobileText>
                    <DesktopText>
                        Procure um Pokémon e role para o lado (Shift+Scroll)
                    </DesktopText>
                    <input
                        value={search}
                        onChange={handleSearch}
                        onInput={handleSearch}
                        placeholder="Busque o nome de um Pokémon aqui."
                        type="text"
                        autoComplete="false"
                    />
                </SearchArea>

                <Container>
                    {everyPokemon.map((i: any) => {
                        if (i.name.match(smartSearch)) {
                            if (search !== '') {
                                return (
                                    <>
                                        <PokeFrame
                                            key={i.url}
                                            pokemonUrl={i.url}
                                        />
                                    </>
                                );
                            }
                        } else {
                            return;
                        }
                    })}
                </Container>
            </Wrapper>
        </>
    );
};

export default PokeSearch;
