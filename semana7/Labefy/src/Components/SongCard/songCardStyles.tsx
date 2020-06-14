import styled, { keyframes } from 'styled-components';

const transition = keyframes`
  from {
   transform: scale(0)
  }

  to {
    transform: scale(1)

  }
`;

export const Container = styled.span`
    width: 100%;
    background-color: #c9c9c9;
    background-blend-mode: screen;
    display: flex;
    border-radius: 5px;
    align-items: center;
    justify-content: space-evenly;
    height: 60px;
    margin: 30px 0;
    padding: 10px 30px 10px 0px;
    font-weight: bold;
    animation-name: ${transition};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;

    audio {
        max-width: 60%;
        height: 60%;
        min-width: 60%;
    }
    span {
        mix-blend-mode: exclusion;
        max-width: 30%;
        min-width: 30%;
        text-align: center;
        color: white;
        font-size: 14px;
        font-weight: 200;
    }

    svg {
        cursor: pointer;
        margin: 0px 15px;
        position: relative;
        top: 1px;
        color: white;
        mix-blend-mode: difference;
    }

    img {
        width: 100px;
        border-radius: 10px;
        box-shadow: 1px 1px 1px 1px #00000080;
    }

    span > a {
        text-align: center;
        color: white;
        text-decoration: none;
    }
`;
