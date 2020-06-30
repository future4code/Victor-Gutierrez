import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 80px;
    background: #000000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    overflow: hidden;

    img {
        height: 200px;
        width: auto;
    }

    a {
        cursor: pointer;
    }

    p {
        align-self: center;
        color: white;
    }

    @media (max-width: 715px) {
        img {
            height: 150px;
        }

        p {
            display: none;
        }
    }

    @media (max-width: 1024px) {
        p {
            display: none;
        }
    }
`;

export const StaffHeading = styled.h2`
    color: yellow;
`;
