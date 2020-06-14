import React from 'react';
import Container from './Header_styles';

const Header = () => {
    return (
        <>
            <Container>
                <h1>Minha PokéDex</h1>
                <span>
                    Powered by:
                    <img
                        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
                        alt=""
                    />
                </span>
            </Container>
        </>
    );
};

export default Header;
