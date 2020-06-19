import styled, { keyframes } from 'styled-components';

const PopUp = keyframes`
  0% {
    bottom: 100px;
    opacity: 0;

  }

  50%{
      bottom: 50px;
      opacity: 0;
  }

      100% {
          bottom: 0;
          opacity: 1;
        }
`;

export const ControlsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #fcfeff;
    padding: 0 15px;
    height: 15%;
    position: relative;
    animation-name: ${PopUp};
    animation-duration: 0.2s;
    border-radius: 0px 0px 5px 5px;

    span {
        border-radius: 100%;
        cursor: pointer;
        transition: all 0.5s;
        padding: 12.5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span:hover {
        transform: scale(1.2);
    }

    span:active {
        box-shadow: 1px 1px 10px #00000073;
    }

    @media (max-width: 320px) {
        height: 70px;
    }
`;
