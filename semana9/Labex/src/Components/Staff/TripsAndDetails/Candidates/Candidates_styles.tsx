import styled from 'styled-components';

export const Card = styled.aside`
    background: black;
    width: 300px;
    height: 300px;
    margin-left: 25px;
    text-align: center;
    padding: 10px;
    border-radius: 15px;

    h1 {
        color: white;
        margin-bottom: 20px;
        margin-top: 15px;
    }

    @media (max-width: 440px) {
        flex-direction: column;
        width: 150px;
        height: 350px;
        font-size: 12px;
    }
`;

export const ListRoll = styled.div`
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    padding: 10px;
    justify-content: center;
    align-items: center;
`;

export const ListItem = styled.li`
    display: flex;
    background: #ebeaea;
    align-items: center;
    width: 100%;
    height: 85%;
    font-size: 14px;
    list-style: none;
    border: 1px solid black;
    margin: 5px 0;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    word-break: break-word;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: column;
        width: 200px;

        p {
            margin: 5px 0;
        }
    }

    span {
        display: flex;
        height: 40px;
        flex-direction: column;
        justify-content: space-between;

        width: 80px;
    }

    &:hover {
        background: yellow;
    }
`;

export const Wrapper = styled.div`
    > h2 {
        display: none;
    }

    @media (max-width: 715px) {
        > h2 {
            display: block;
            color: white;
            padding: 20px;
        }
        * {
            display: none;
        }
    }
`;
