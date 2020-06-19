import styled, { keyframes } from 'styled-components';

const Pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50%{
    transform: scale(1.1);
  }
  100% {
  transform: scale(1);
  }
`;

export const Container = styled.div`
    position: fixed;
    bottom: 25px;
    right: 15px;
`;
export const ListContainer = styled.div`
    align-items: center;
    background: #fcfeff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    h4 {
        align-self: center;
        text-align: center;
    }
    height: 500px;
    justify-content: center;
    padding: 20px 5px;
    position: fixed;
    right: 15px;
    bottom: 10px;
    width: 300px;
`;

export const List = styled.div`
    height: 80%;
    overflow-x: hidden;
    overflow-y: scroll;
    width: 90%;

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        border-radius: 10px;
        box-shadow: inset 0 0 5px grey;
    }
    ::-webkit-scrollbar-thumb {
        background: #ff914d;
        border-radius: 10px;
    }
`;

export const ShowList = styled.button`
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: ${Pulse};
    background: none;
    border-radius: 100%;
    border: none;
    bottom: 20px;
    height: 70px;
    outline: none;
    p {
        background: coral;
        border-radius: 100%;
        bottom: 55px;
        color: white;
        font-weight: bold;
        left: 45px;
        padding: 5px;
        position: absolute;
        text-align: center;
    }
    position: fixed;
    right: 15px;
    width: 70px;

    @media (max-width: 320px) {
        position: fixed;
        bottom: 550px;
        right: 10px;
    }
`;

export const Person = styled.span`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 50px;
    width: 100%;
    margin: 10px auto;
    padding: 35px 0px;

    p {
        text-align: center;
        width: 100px;
    }

    &:active {
        background: #808080d6;
        cursor: pointer;
    }

    &:hover {
        background: #8080800f;
        cursor: pointer;
    }
    > * {
        margin: 0 15px;
    }
    img {
        width: 100px;
        height: 100px;
    }
`;

export const PhotoFrame = styled.section`
    align-items: center;
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    height: 50px;
    justify-content: center;
    overflow: hidden;
    width: 50px;

    img {
        height: 50px;
        width: 50px;
    }
`;

export const ClearButton = styled.button`
    align-self: flex-end;
    background: none;
    border-radius: 5px;
    border: 1px solid #ff914d;
    margin: 10px auto;
    padding: 10px;

    &:hover {
        background: #ff914d;
        color: white;
    }
`;

export const CloseButton = styled.button`
    align-self: flex-end;
    background: none;
    border-radius: 5px;
    border: 1px solid #3c3939e0;
    margin: 10px auto;
    padding: 10px;

    &:hover {
        background: #3c3939e0;
        color: white;
    }
`;
