import React from 'react';
import PokeList from '../../Components/PokeList/PokeList';
import Header from '../../Components/Header/Header';
import { Wrapper } from '../../Components/Wrapper/Wrapper_styles';
import PokeSearch from '../../Components/PokeSearch/PokeSearch';

function Homepage() {
    return (
        <>
            <Header />
            <PokeSearch />
            <Wrapper>
                <PokeList />
            </Wrapper>
        </>
    );
}

export default Homepage;
