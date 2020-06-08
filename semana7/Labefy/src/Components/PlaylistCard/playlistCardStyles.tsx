import styled, { keyframes } from 'styled-components';

const transition = keyframes`
  from {
   transform: scale(0)
  }

  to {
    transform: scale(1)

  }
`;

export const Frame = styled.div`
    display: flex;
    width: 200px;
    height: 200px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    animation-name: ${transition};
    animation-duration: 1s;
    animation-fill-mode: forwards;
    transition: background 1.5s ease;

    &:hover {
        background-size: 300px;
    }

    div {
        transition: all 0.5s ease;
        position: relative;
        top: 5px;
    }

    div:hover {
        transform: scale(1.2);
        mix-blend-mode: screen;
    }

    a {
        text-decoration: none;
        color: yellow;
        font-weight: bold;
    }

    p {
        position: relative;
        top: 20px;
        text-align: center;
        font-size: 14px;
        width: 100%;
        padding: 5px;
        background: #ffffffc7;
        word-wrap: break-word;
        overflow-wrap: wrap;
    }

    i {
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-shadow: 2px 2px 2px black;
        border-radius: 100%;
        color: white;
        background: #ec008c;
        padding: 10px;
        width: 60px;
        height: 60px;
        position: absolute;
        bottom: 165px;
        right: 0;
        left: 155px;
    }
`;
