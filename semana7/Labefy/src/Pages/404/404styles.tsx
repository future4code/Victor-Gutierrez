import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #f7f7f7;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: inherit;
        color: black;
        font-weight: bold;
        position: relative;
        bottom: 250px;
        font-size: 32px;
    }
    a:hover {
        color: #59caf5;
    }

    h1 {
        margin-top: 50px;
        color: black;
    }
    img {
        margin-bottom: 250px;
    }
`;
