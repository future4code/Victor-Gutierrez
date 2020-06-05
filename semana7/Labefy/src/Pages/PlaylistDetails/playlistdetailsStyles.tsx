import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 50px;

    min-height: 1000px;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 50px;
        right: 250px;
        cursor: pointer;
        text-align: center;
        width: 200px;
    }
`;
