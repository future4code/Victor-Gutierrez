import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
  height: 200px;
  width: 300px;
  position: sticky;
  background: white;
  border: 2px dashed #d05a76;

  padding: 20px 10px;
  top: 10px;
  z-index: 2;
  text-align: center;
  border-radius: 2px 30px 30px 30px;

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-top: 5px;
      margin-bottom: 5px;
    }

    button {
      margin-top: 15px;
    }
  }
`;
