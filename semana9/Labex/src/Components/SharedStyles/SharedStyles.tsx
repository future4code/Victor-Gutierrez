import jupiter from '../../Assets/images/jupiter.jpg';
import terra from '../../Assets/images/terra.jpg';
import netuno from '../../Assets/images/netuno.jpg';
import urano from '../../Assets/images/urano.jpg';
import mercurio from '../../Assets/images/mercurio.jpg';
import saturn from '../../Assets/images/saturn.jpg';
import venus from '../../Assets/images/venus.jpg';
import vialactea from '../../Assets/images/vialactea.jpg';
import marte from '../../Assets/images/marte.jpg';

import styled from 'styled-components';

export const LinkBox = styled.nav`
    display: flex;
    width: 300px;
    justify-content: space-around;

    a {
        color: white;
        text-decoration: none;
        transition: all 1s ease;
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        overflow: hidden;
        padding: 5px 0;
        font-weight: 300;
        font-size: 16px;
    }

    a:before {
        content: '';
        position: absolute;
        z-index: -1;
        left: 0;
        right: 100%;
        bottom: 0;
        background: white;
        height: 1px;
        -webkit-transition-property: right;
        transition-property: right;
        -webkit-transition-duration: 0.6s;
        transition-duration: 0.6s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }

    a:hover:before,
    a:focus:before,
    a:active:before {
        right: 0;
    }

    button {
        color: white;
        background: none;
        border: none;
        font-size: 16px;

        text-decorbuttontion: none;
        transition: all 1s ease;
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        overflow: hidden;
        padding: 5px 0;
    }

    button:before {
        content: '';
        position: absolute;
        z-index: -1;
        left: 0;
        right: 100%;
        bottom: 0;
        background: white;
        height: 1px;
        -webkit-transition-property: right;
        transition-property: right;
        -webkit-transition-duration: 0.6s;
        transition-duration: 0.6s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }

    button:hover:before,
    button:focus:before,
    button:active:before {
        right: 0;
    }

    @media (max-width: 440px) {
        width: 200px;
        a,
        button {
            font-size: 12px;
        }
    }
`;

export const FormContainer = styled.main`
    display: flex;
    flex-direction: column;
    height: 600px;
    width: 400px;
    background: #000000;
    border: 1.5px solid white;
    position: relative;
    align-items: center;
    justify-content: center;

    img {
        width: 60%;
        height: auto;
    }

    ${LinkBox} {
        margin-bottom: 30px;
        margin-top: 45px;
    }

    @media (max-width: 440px) {
        background: none;
        border: none;
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

    &:valid {
        border: 1px solid green;
    }

    &:invalid {
        border: 1px solid red;
    }
`;

export const FormSelect = styled.select`
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

    &:valid {
        border: 1px solid green;
    }

    &:invalid {
        border: 1px solid red;
    }

    option {
        width: 300px;
        height: 3rem;
        font-size: 1rem;
        background: #b0b0b0;
    }
`;

export const FormLabel = styled.label`
    color: #616161;
    position: relative;
    bottom: 50px;
    margin-left: 10px;
    font-size: 0.8rem;
    cursor: text;
    transition: 0.2s ease-in-out;
    box-sizing: border-box;
    width: 100%;
    height: 3rem;
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
    height: auto;
    min-height: 1240px;
    justify-content: center;
    align-items: center;

    @media (max-width: 840px) {
        align-items: flex-start;
    }
`;

export const setPhotoInCard = (props: string) => {
    switch (props) {
        case 'Mercúrio':
            return mercurio;
        case 'Vênus':
            return venus;
        case 'Marte':
            return marte;
        case 'Saturno':
            return saturn;
        case 'Urano':
            return urano;
        case 'Netuno':
            return netuno;
        case 'Exploração Galática':
            return vialactea;
        case 'Terra':
            return terra;
        case 'Júpiter':
            return jupiter;
    }
};
