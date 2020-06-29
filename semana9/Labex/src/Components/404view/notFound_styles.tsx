import styled, { keyframes } from 'styled-components';


//fix: 404 page image aspect ratio

const shadanim = keyframes`
from {
    transform: rotatey(0deg);

}
to {
    transform: rotatey(360deg);
}
`;

export const Wrapper = styled.main`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        width: 100%;
        height: 1200px;
        position: absolute;
        filter: blur(20px);
    }

    h1 {
        z-index: 2;
        font-size: 172px;
        animation: ${shadanim} 2s linear infinite;
    }

    h2 {
        color: black;
        z-index: 2;
        font-size: 42px;
        padding: 10px;
    }

    h4 {
        color: black;
        z-index: 2;
        padding: 10px;
    }

    a {
        color: black;
        font-weight: bold;
        margin-top: 150px;
    }
`;

