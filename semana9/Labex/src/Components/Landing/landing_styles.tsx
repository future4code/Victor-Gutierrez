import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90vh;
    width: 100%;
`;

export const Box = styled.section`
    padding-left: 50px;
`;

export const Brand = styled.h1`
    color: white;
    font-size: 56px;
    margin-bottom: 40px;
    position: relative;
    right: 5px;
`;

export const Title = styled.h3`
    color: white;
    margin: 20px 0 0 0;
`;

export const Sentence = styled.p`
    color: #fafafa;
    word-break: break-word;
    padding-right: 10px;
`;

export const BackGroundVideo = styled.video`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;



    @media (min-aspect-ratio: 16/9) {
        & {
            width: 100%;
            height: auto;
        }
    }
    @media (max-aspect-ratio: 16/9) {
        & {
            width: auto;
            height: 100%;
        }
    }
    @media (max-width: 955px) {
        & {
            width: auto;
            height: 100%;
        }
`;
