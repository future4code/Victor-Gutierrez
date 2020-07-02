import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 200px;
  border: 1px dashed black;
  list-style: none;
  text-align: center;
  break-before: auto;
  word-break: break-word;
  overflow-y: scroll;

  h1 {
    font-size: 20px;
    text-align: center;
    padding: 5px;
    margin-bottom: 10px;
  }
`;


