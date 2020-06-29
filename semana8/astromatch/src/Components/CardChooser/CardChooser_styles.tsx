import styled, { keyframes } from 'styled-components';

import { StyledProps } from '../../Types/interfaces';

const PopUp = keyframes`
  from {
    height: 0
  }

  to {
    height: 50px
  }
`;

const PopUpInfo = keyframes`
  0% {
    height: 0
  }
    50%{
        height: 120px;

    }
      100% {
          height: auto
        }
`;

export const Container = styled.main<StyledProps>`
    display: flex;
    flex-direction: column;
    width: 475px;
    height: 500px;
    border-radius: 5px;
    background: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: 320px) {
        height: 275px;
        width: 355px;
    }
`;

export const Card = styled.section<StyledProps>`
    display: flex;
    width: 100%;
    height: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    background: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    background-color: #ff914d;
    border-radius: 5px 5px 0px 0px;
    position: relative;
    overflow: hidden;
`;

export const Name = styled.p`
    color: black;
    font-weight: bold;
    font-size: 24px;
    display: inline;
`;

export const Age = styled.p`
    color: black;
    display: inline;
    font-weight: 10;
    font-size: 20px;
`;

export const Mileage = styled.p`
    color: #7d787896;
    font-weight: normal;
    font-size: 16px;
    @media (max-width: 320px) {
        margin-bottom: 15px;
    }
`;

export const Bio = styled.p`
    color: #7d787896;
    font-weight: normal;
    font-size: 16px;
    animation: ${PopUp} 0.5s linear;
    animation-fill-mode: forwards;
    margin: 15px 0;
`;

export const Info = styled.span`
    background: #fcfeff;
    width: 100%;
    padding: 10px;
    position: absolute;
    weight: auto;
    bottom: 0;
    animation: ${PopUpInfo} 0.5s linear;
    animation-fill-mode: forwards;
    transition: all 1s;

    &:hover {
        background: #fafdff59;
    }

    @media (max-width: 320px) {
        &:hover {
            background: #fcfeff;
        }
    }
`;

export const Center = styled.div`
    text-align: center;
    cursor: pointer;
`;
