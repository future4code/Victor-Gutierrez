import styled, { keyframes } from 'styled-components';

const transition = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;

  }
`;

export const Container = styled.main`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 100px;
    animation: ${transition} 3s linear;

    > * {
        margin: 30px 15px;
    }
    span {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 150px;
        right: 50px;
        width: 200px;
        cursor: pointer;
        text-align: center;
        width: 200px;
        animation: ${transition} 1s linear;
        z-index: 3;
    }

    h1 {
        margin: 200px 0px;
    }
`;

export const AddPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 50px;
    right: 50px;
    cursor: pointer;
    text-align: center;
    width: 200px;
    background: #f7f7f7;
    border-radius: 4px;
    padding: 10px 20px;
    transition: all 1s ease;
    z-index: 3;

    &:hover {
        background: #f680c5;
        color: white;
    }
`;
