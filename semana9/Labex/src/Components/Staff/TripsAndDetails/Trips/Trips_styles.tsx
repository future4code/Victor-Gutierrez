import styled from 'styled-components';

export const Listing = styled.section`
    height: 700px;
    width: 400px;
    border-radius: 7px;
    background: black;

    @media (max-width: 715px) {
        display: none;
    }
`;
export const ListRoll = styled.div`
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    padding: 25px;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    height: 20%;
    list-style: none;
    border: 1px solid black;
    margin: 5px 0;
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
    background: #ebeaea;
    word-break: break-word;
    position: relative;

    &:hover {
        background: yellow;
    }

    h3 {
        margin: 15px;
        width: 50%;
    }

    p {
        font-size: 12px;
        width: 20%;
        margin: 30px;
        text-align: center;
    }

    svg {
        position: absolute;
        right: 5px;
        top: 5px;
    }
`;
