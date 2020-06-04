import styled from 'styled-components';

export const Card = styled.div`
    background-color: wheat;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    border-radius: 5%;
    justify-content: space-evenly;
    padding: 10px;
    width: 400px;
    height: 200px;

    img {
        max-width: 125%;
    }

    @media screen and (max-width: 800px) {
        width: 350px;
    }
`;

export const WhiteBackground = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background-color: #ffffffb0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default { Card, WhiteBackground };
