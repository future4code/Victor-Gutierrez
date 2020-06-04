import styled from 'styled-components';
import Card from './../PokeFrame/PokeFrame_styles';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    overflow-x: scroll;
    margin-bottom: 25px;
    ::-webkit-scrollbar {
        display: none;
    }

    * {
        margin: 0 50px;
    }

    ${Card} {
        background-color: yellow;

        img {
            position: relative;
            right: 50px;
        }
    }
`;
export const SearchArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    font-weight: bold;

    input {
        width: 300px;
        margin: 25px auto;
        text-align: center;
        border-radius: 5%;
        outline: none;
        border: none;
        padding: 3px;
    }
`;

export const MobileText = styled.p`
    display: none;

    @media screen and (max-width: 800px) {
        display: flex;
    }
`;

export const DesktopText = styled.p`
    display: block;
    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
`;

export const Search = styled.button`
    color: white;
    background-color: #ef5350;
    border: 1px solid yellow;
    border-radius: 4px;
    padding: 0 15px;
    cursor: pointer;
    height: 32px;
    font-size: 14px;
    margin-bottom: 50px;
    background-position: center;
    transition: background 0.8s;

    &:active {
        box-shadow: 0 3px 0 yellow;
        top: 3px;
    }
`;
