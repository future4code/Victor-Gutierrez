import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    background-color: #ef5350;
    height: 15vh;
    margin-bottom: 50px;
    justify-content: space-evenly;
    align-items: center;
    color: white;

    img {
        width: 200px;
    }

    span {
        display: flex;
        width: 400px;
        align-items: center;
        justify-content: space-evenly;
    }
    @media screen and (max-width: 800px) {
        flex-direction: column;
        height: 30vh;
        width: 100vw;

        span {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-evenly;
        }
    }
`;

export default Container;
