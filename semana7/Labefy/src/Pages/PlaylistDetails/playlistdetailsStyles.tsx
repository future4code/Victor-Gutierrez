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
        z-index: 2;
    }
`;

export const RemovePlaylist = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 50px;
    right: 55px;
    cursor: pointer;
    text-align: center;
    width: 200px;
    z-index: 2;
    background: #f7f7f7;
    border-radius: 4px;
    padding: 10px 20px;
    transition: all 1s ease;
    margin-right: 5px;

    &:hover {
        background: #f680c5;
        color: white;
    }
`;

export const PlaylistName = styled.h1`
    text-align: center;
    margin-top: 50px;
`;
