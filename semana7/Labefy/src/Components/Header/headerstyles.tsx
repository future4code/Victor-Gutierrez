import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 200px;
    align-items: center;
    padding: 20px 0;
    background: #f7f7f7;
    font-family: 'Righteous', cursive;

    a {
        text-decoration: none;
        color: inherit;
    }

    img {
        width: 300px;
        height: 200px;
    }
`;
