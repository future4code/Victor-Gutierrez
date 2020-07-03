import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  height: 230px;
  width: 300px;
  background: white;
  border: 2px dashed #d05a76;
  padding: 10px 10px;

  z-index: 2;
  text-align: center;
  border-radius: 2px 30px 30px 30px;

  h5 {
    color: black;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      color: black;
      margin-top: 5px;
      margin-bottom: 5px;
    }

    button {
      margin-top: 15px;
    }
  }
`;
