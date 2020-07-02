import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 150px;

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-top: 5px;
      margin-bottom: 2.5px;
    }
  }
`;
