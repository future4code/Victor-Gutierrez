import styled from 'styled-components';

export const Container = styled.header`
    background: #000000;
    height: 150px;
    display: flex;
    padding: 15px;
    align-items: center;
    justify-content: center;
    color: white;

    @media (max-width: 440px) {
        font-size: 14px;
    }
`;
