import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 80px;
    background: #000000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    overflow: hidden;

    img {
        height: 200px;
        width: auto;
    }
`;

export const LinkBox = styled.span`
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
`;
