import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    margin-top: 150px;
    height: 300px;
    width: 100%;

    span {
        margin-top: 50px;
    }

    span * {
        margin: 0 20px;
    }

    img {
        width: 30%;
        height: 60%;
        align-self: center;
    }
`;

export const EditionInput = styled.input`
    margin: 30px 30px 50px;
`;

export const LinkWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    margin-top: 200px;

    * {
        display: block;
        margin: 15px auto;
    }
`;
