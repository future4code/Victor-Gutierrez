import React, { useState, useEffect } from 'react';
import api from '../../Services/api';
import styled from 'styled-components';
import PokeFrame from './../PokeFrame/PokeFrame';
import { List, BtnWrapper, Text, Ylink } from './PokeList_styles';

function PokeList(props: any): any {
    const [pokemonList, setPokemonList] = useState<any>([]);
    const [pages, setPages] = useState<number>(
        Number(localStorage.getItem('pages')),
    );

    const PrevButton = styled.button`
        display: ${pages === 0 ? 'none' : 'block'};
    `;

    const NextButton = styled.button`
        display: ${pages === 787 ? 'none' : 'block'};
    `;

    const handleNextPage = () => {
        if (pages === 780) {
            setPages(pages + 7);
        } else if (pages === 787) {
            return;
        } else {
            setPages(pages + 20);
        }
    };

    const handlePrevPage = () => {
        if (pages === 0) {
            return;
        } else if (pages === 780) {
            setPages(pages - 7);
        } else {
            setPages(pages - 20);
        }
    };

    useEffect(() => {
        api.get<any>(`pokemon?offset=${pages}&limit=20`).then((response) => {
            setPokemonList(response.data.results);
            console.log(localStorage.getItem('pages'));
            localStorage.setItem('pages', JSON.stringify(pages));
        });
    }, [pages]);

    const setNewPage = (e: any) => {
        if (e.target.value > 39) {
            setPages(39 * 20);
        } else if (e.target.value < 0) {
            setPages(0);
        } else {
            setPages(e.target.value * 20);
        }
    };

    return (
        <>
            <List>
                {pokemonList.map((pokemon: any) => (
                    <>
                        <div key={pokemon.url}>
                            <PokeFrame pokemonUrl={pokemon.url} />
                        </div>
                    </>
                ))}
            </List>
            <BtnWrapper>
                <PrevButton onClick={handlePrevPage}>Anterior</PrevButton>
                <p>
                    Página atual: {Math.ceil(pages / 20)}/{800 / 20} <br />
                    Go to:{' '}
                    <input
                        onChange={setNewPage}
                        value={Math.ceil(pages / 20)}
                        type="number"
                        max={39}
                        min={0}
                    />
                </p>
                <NextButton onClick={handleNextPage}>Próxima</NextButton>
            </BtnWrapper>
            <Text>
                Made by:{' '}
                <Ylink href="https://github.com/V-Gutierrez">
                    Victor Gutierrez
                </Ylink>
            </Text>
        </>
    );
}

export default PokeList;
