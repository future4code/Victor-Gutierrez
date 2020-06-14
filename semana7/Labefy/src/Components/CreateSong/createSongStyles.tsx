import styled, { keyframes } from 'styled-components';

const transition = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;

  }
`;

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 150px;
    right: 50px;
    width: 200px;
    animation: ${transition} 1s linear;
    z-index: 2;

    select {
        position: relative;
        bottom: 2.5px;
    }
`;
export const AddSong = styled.div`
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
    z-index: 2;
    background: #f7f7f7;
    border-radius: 4px;
    padding: 10px 20px;
    transition: all 1s ease;

    &:hover {
        background: #f680c5;
        color: white;
    }
`;
