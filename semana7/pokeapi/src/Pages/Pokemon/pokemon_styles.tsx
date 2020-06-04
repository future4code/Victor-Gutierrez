import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const WhiteBackground = styled.div`
    width: 450px;
    height: 450px;
    border-radius: 100%;
    background-color: #cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PokeDexCard = styled.div`
    background-color: #cccccc;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100%25 100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(311,639,477)' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23c7c7c7'/%3E%3Cstop offset='0.02' stop-color='%23cccccc'/%3E%3Cstop offset='0.02' stop-color='%23c8c8c8'/%3E%3Cstop offset='0.032' stop-color='%23cccccc'/%3E%3Cstop offset='0.032' stop-color='%23c3c3c3'/%3E%3Cstop offset='0.056' stop-color='%23cccccc'/%3E%3Cstop offset='0.056' stop-color='%23c3c3c3'/%3E%3Cstop offset='0.07' stop-color='%23cccccc'/%3E%3Cstop offset='0.07' stop-color='%23cacaca'/%3E%3Cstop offset='0.1' stop-color='%23cccccc'/%3E%3Cstop offset='0.1' stop-color='%23c0c0c0'/%3E%3Cstop offset='0.126' stop-color='%23cccccc'/%3E%3Cstop offset='0.126' stop-color='%23c9c9c9'/%3E%3Cstop offset='0.142' stop-color='%23cccccc'/%3E%3Cstop offset='0.142' stop-color='%23c8c8c8'/%3E%3Cstop offset='0.159' stop-color='%23cccccc'/%3E%3Cstop offset='0.159' stop-color='%23c8c8c8'/%3E%3Cstop offset='0.17' stop-color='%23cccccc'/%3E%3Cstop offset='0.17' stop-color='%23c6c6c6'/%3E%3Cstop offset='0.197' stop-color='%23cccccc'/%3E%3Cstop offset='0.197' stop-color='%23c8c8c8'/%3E%3Cstop offset='0.218' stop-color='%23cccccc'/%3E%3Cstop offset='0.218' stop-color='%23c4c4c4'/%3E%3Cstop offset='0.239' stop-color='%23cccccc'/%3E%3Cstop offset='0.239' stop-color='%23c7c7c7'/%3E%3Cstop offset='0.254' stop-color='%23cccccc'/%3E%3Cstop offset='0.254' stop-color='%23c7c7c7'/%3E%3Cstop offset='0.283' stop-color='%23cccccc'/%3E%3Cstop offset='0.283' stop-color='%23cfcfcf'/%3E%3Cstop offset='0.294' stop-color='%23cccccc'/%3E%3Cstop offset='0.294' stop-color='%23cccccc'/%3E%3Cstop offset='0.305' stop-color='%23cccccc'/%3E%3Cstop offset='0.305' stop-color='%23cccccc'/%3E%3Cstop offset='0.332' stop-color='%23cccccc'/%3E%3Cstop offset='0.332' stop-color='%23cecece'/%3E%3Cstop offset='0.346' stop-color='%23cccccc'/%3E%3Cstop offset='0.346' stop-color='%23cacaca'/%3E%3Cstop offset='0.362' stop-color='%23cccccc'/%3E%3Cstop offset='0.362' stop-color='%23cbcbcb'/%3E%3Cstop offset='0.381' stop-color='%23cccccc'/%3E%3Cstop offset='0.381' stop-color='%23cccccc'/%3E%3Cstop offset='0.415' stop-color='%23cccccc'/%3E%3Cstop offset='0.415' stop-color='%23c4c4c4'/%3E%3Cstop offset='0.428' stop-color='%23cccccc'/%3E%3Cstop offset='0.428' stop-color='%23cbcbcb'/%3E%3Cstop offset='0.442' stop-color='%23cccccc'/%3E%3Cstop offset='0.442' stop-color='%23bcbcbc'/%3E%3Cstop offset='0.456' stop-color='%23cccccc'/%3E%3Cstop offset='0.456' stop-color='%23c5c5c5'/%3E%3Cstop offset='0.498' stop-color='%23cccccc'/%3E%3Cstop offset='0.498' stop-color='%23bfbfbf'/%3E%3Cstop offset='0.511' stop-color='%23cccccc'/%3E%3Cstop offset='0.511' stop-color='%23cacaca'/%3E%3Cstop offset='0.532' stop-color='%23cccccc'/%3E%3Cstop offset='0.532' stop-color='%23cdcdcd'/%3E%3Cstop offset='0.541' stop-color='%23cccccc'/%3E%3Cstop offset='0.541' stop-color='%23cccccc'/%3E%3Cstop offset='0.56' stop-color='%23cccccc'/%3E%3Cstop offset='0.56' stop-color='%23c3c3c3'/%3E%3Cstop offset='0.581' stop-color='%23cccccc'/%3E%3Cstop offset='0.581' stop-color='%23c7c7c7'/%3E%3Cstop offset='0.6' stop-color='%23cccccc'/%3E%3Cstop offset='0.6' stop-color='%23cccccc'/%3E%3Cstop offset='0.618' stop-color='%23cccccc'/%3E%3Cstop offset='0.618' stop-color='%23c7c7c7'/%3E%3Cstop offset='0.656' stop-color='%23cccccc'/%3E%3Cstop offset='0.656' stop-color='%23cbcbcb'/%3E%3Cstop offset='0.679' stop-color='%23cccccc'/%3E%3Cstop offset='0.679' stop-color='%23cecece'/%3E%3Cstop offset='0.689' stop-color='%23cccccc'/%3E%3Cstop offset='0.689' stop-color='%23cdcdcd'/%3E%3Cstop offset='0.720' stop-color='%23cccccc'/%3E%3Cstop offset='0.720' stop-color='%23cacaca'/%3E%3Cstop offset='0.734' stop-color='%23cccccc'/%3E%3Cstop offset='0.734' stop-color='%23cccccc'/%3E%3Cstop offset='0.748' stop-color='%23cccccc'/%3E%3Cstop offset='0.748' stop-color='%23cacaca'/%3E%3Cstop offset='0.764' stop-color='%23cccccc'/%3E%3Cstop offset='0.764' stop-color='%23c9c9c9'/%3E%3Cstop offset='0.788' stop-color='%23cccccc'/%3E%3Cstop offset='0.788' stop-color='%23c9c9c9'/%3E%3Cstop offset='0.808' stop-color='%23cccccc'/%3E%3Cstop offset='0.808' stop-color='%23cbcbcb'/%3E%3Cstop offset='0.831' stop-color='%23cccccc'/%3E%3Cstop offset='0.831' stop-color='%23cdcdcd'/%3E%3Cstop offset='0.856' stop-color='%23cccccc'/%3E%3Cstop offset='0.856' stop-color='%23d0d0d0'/%3E%3Cstop offset='0.872' stop-color='%23cccccc'/%3E%3Cstop offset='0.872' stop-color='%23c3c3c3'/%3E%3Cstop offset='0.894' stop-color='%23cccccc'/%3E%3Cstop offset='0.894' stop-color='%23cacaca'/%3E%3Cstop offset='0.914' stop-color='%23cccccc'/%3E%3Cstop offset='0.914' stop-color='%23c4c4c4'/%3E%3Cstop offset='0.942' stop-color='%23cccccc'/%3E%3Cstop offset='0.942' stop-color='%23cccccc'/%3E%3Cstop offset='0.957' stop-color='%23cccccc'/%3E%3Cstop offset='0.957' stop-color='%23c3c3c3'/%3E%3Cstop offset='0.973' stop-color='%23cccccc'/%3E%3Cstop offset='0.973' stop-color='%23c7c7c7'/%3E%3Cstop offset='1' stop-color='%23cccccc'/%3E%3Cstop offset='1' stop-color='%23c7c7c7'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' x='0' y='0' width='100%25' height='100%25'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    width: 1000px;
    height: 800px;
    margin-top: 100px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: black;
    font-weight: bold;

    a {
        padding: 20px 50px;
        background-color: white;
        border-radius: 5px;
    }
`;
