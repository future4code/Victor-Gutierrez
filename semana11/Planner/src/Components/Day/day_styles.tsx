import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  height: 300px;
  width: 300px;
  border-bottom: 5px dashed white;
  list-style: none;
  text-align: center;
  break-before: auto;
  word-break: break-word;
  overflow-y: scroll;
  border-radius: 5px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    display: none;
  }

  ::-webkit-scrollbar-thumb:hover {
    display: none;
  }

  h1 {
    font-size: 20px;
    text-align: center;
    padding: 5px;
    margin-bottom: 10px;
    position: sticky;
    top: 0px;
    background: white;
    border-radius: 5px;
  }
`;
