import styled from 'styled-components';

export const Title = styled.h2`
    padding: 15px 0 15px 0;
    height: 150px;
`;

export const Planet = styled.h4`
    color: gray;
`;

export const Container = styled.li`
    display: flex;
    flex-direction: column;
    background: white;
    width: 300px;
    height: 150px;
    margin: 0 5px;
    border-radius: 5px;
    padding: 10px;
    text-align: baseline;
    word-break: break-word;

    &:hover {
        background: #ebeaea;
    }
    a {
        text-decoration: none;
        color: black;
    }
`;
