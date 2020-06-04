import styled from 'styled-components';

export const List = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 400px);
    text-align: center;
    justify-content: space-evenly;
    gap: 20px;
    padding: 10px;
    height: auto;
    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
        justify-items: center;
        row-gap: 10px;
        column-gap: 0px;
        width: 100vw;
    }
`;

export const BtnWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 10vh;
    position: sticky;
    bottom: 0;
    background-color: #ef5350;
    border-top: 1px solid yellow;

    button {
        color: white;
        background-color: #ef5350;
        border: 1px solid yellow;
        border-radius: 4px;
        padding: 0 15px;
        cursor: pointer;
        height: 32px;
        font-size: 14px;
        background-position: center;
        transition: background 0.8s;
    }
    button:active {
        box-shadow: 0 3px 0 yellow;
        top: 3px;
    }

    p {
        color: white;
        font-weight: bold;
    }

    input {
        width: 40px;
        text-align: center;
        border-radius: 5%;
        outline: none;
        border: none;
        padding: 3px;
    }
`;

export const Text = styled.p`
    color: white;
    font-weight: bold;
`;

export const Ylink = styled.a`
    color: yellow;
    text-decoration: none;
    font-weight: bold;
`;
