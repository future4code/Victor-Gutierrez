import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 320px) {
        justify-content: center;
        height: 300px;
        margin-bottom: 50px;
    }
`;
