import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 100px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ff914d;
    overflow: hidden;
    box-shadow: 0px 2.2px 2.2px #0000004f;

    img {
        width: 300px;
    }

    @media (max-width: 320px) {
        justify-content: center;
    }
`;
