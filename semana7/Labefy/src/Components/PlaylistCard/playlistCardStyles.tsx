import styled from 'styled-components';

export const Frame = styled.div`
    display: flex;
    width: 200px;
    height: 200px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url('https://source.unsplash.com/random');
    background-size: cover;
    border-radius: 5px;

    div {
        transition: all 0.5s ease;
    }

    div:hover {
        transform: scale(1.2);
    }

    a {
        text-decoration: none;
        color: yellow;
        font-weight: bold;
    }

    p {
        text-align: center;
        font-size: 18px;
        width: 100%;
        padding: 5px;
        background: #ffffffc7;
    }
`;
