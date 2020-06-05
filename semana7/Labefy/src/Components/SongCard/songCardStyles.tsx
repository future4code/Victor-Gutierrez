import styled from 'styled-components';

export const Container = styled.span`
    width: 100%;
    background-color: #c9c9c9;
    display: flex;
    border-radius: 5px;
    align-items: center;
    justify-content: space-evenly;
    height: 60px;
    margin: 10px 0;
    padding: 10px 0;
    font-weight: bold;

    audio {
        max-width: 60%;
        height: 60%;
        min-width: 60%;
    }
    span {
        max-width: 30%;
        min-width: 30%;
        text-align: center;
    }
    p {
        cursor: pointer;
    }
`;
