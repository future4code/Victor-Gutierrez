import styled from 'styled-components';
import { LinkBox } from '../Header/header_styles';

export const FormContainer = styled.main`
    display: flex;
    flex-direction: column;
    height: 600px;
    width: 400px;
    background: #000000;
    border: 1.5px solid white;
    position: relative;
    align-items: center;

    img {
        width: 60%;
        height: auto;
    }

    ${LinkBox} {
        margin-bottom: 30px;
        margin-top: 45px;
    }
`;

export const FormInput = styled.input`
    display: block;
    border: 0;
    border-bottom: 2px solid #9e9e9e;
    outline: none;
    transition: 0.2s ease-in-out;
    box-sizing: border-box;
    margin: 15px 0;

    width: 300px;
    height: 3rem;
    font-size: 1rem;
    background: #b0b0b0;
    border-radius: 3px;

    &:valid,
    &:focus {
        border-bottom: 4px solid white;
    }

    &:valid + label,
    &:focus + label {
        color: white;
        pointer-events: none;
        bottom: 100px;
        margin-left: 0;
    }
`;

export const FormLabel = styled.label`
    color: #616161;
    position: relative;
    bottom: 50px;
    margin-left: 10px;

    font-size: 1rem;
    cursor: text;
    transition: 0.2s ease-in-out;
    box-sizing: border-box;

    width: 100%;
    height: 3rem;
    font-size: 1rem;
`;

export const FormButton = styled.button`
    display: block;
    margin: 0 auto;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    background: none;
    color: white;
    font-weight: 500;
    padding: 10px 30px;
    outline: none;
    border: 1px solid white;

    &:before {
        content: '';
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: white;
        -webkit-transform: scaleY(0);
        transform: scaleY(0);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }

    &:hover,
    &:focus,
    &:active {
        color: black;
    }

    &:hover:before,
    &:focus:before,
    &:active:before {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
        -webkit-transition-timing-function: cubic-bezier(
            0.52,
            1.64,
            0.37,
            0.66
        );
        transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    }
`;

export const Container = styled.section`
    display: flex;
    width: 100%;
    height: 90vh;
    justify-content: center;
    align-items: center;
`;
