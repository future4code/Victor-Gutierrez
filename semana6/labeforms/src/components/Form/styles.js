import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    font-size: 2rem;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    label {
        margin-top: 50px;
    }
    button {
        margin-top: 50px;
        padding: 30px;
        color: black;
        font-weight: bold;
        border-radius: 5%;
    }
    input,
    select,
    option {
        width: 80%;
        padding: 5px 15px;
        border-radius: 5%;
    }
`;

export const Final = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-image: url("data:image/jpeg;base64,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");
    background-attachment: fixed;
    background-size: cover;
    text-align: center;

    div {
        width: 600px;
        height: 700px;
        background-color: #0000008a;
        border-radius: 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1 {
        margin-bottom: 50px;
    }

    ul {
        list-style: none;
        font-size: 1.5rem;
    }

    * {
        color: white;
    }

    a {
        margin-top: 50px;
        font-size: 2rem;
    }
`;

export const Error = styled.p`
    color: red;
`;

export const Display = styled.p`
    color: #ff7b12;
`;
