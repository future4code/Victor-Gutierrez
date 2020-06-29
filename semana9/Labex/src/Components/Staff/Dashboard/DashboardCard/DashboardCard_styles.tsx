import styled from 'styled-components';

export const Card = styled.section`
    background: #ebeaea;
    width: 350px;
    height: 200px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    transition: all 1s;
    margin: 30px;

    a {
        text-decoration: none;
        color: inherit;
    }

    &:hover {
        transform: scale(1.2);
    }
`;
