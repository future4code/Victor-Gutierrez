import styled from 'styled-components';
import { TodoItemTextProps } from '../../Types/index';

export const TaskBox = styled.li`
  width: 80%;
  height: auto;
  padding: 10px;
  border-radius: 5px;
  word-break: break-word;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  background: bisque;

  input::placeholder {
    text-align: center;
  }

  form > button {
    width: 100%;
  }
`;

export const TaskText = styled.p<TodoItemTextProps>`
  color: ${(props) => (props.completion ? 'gray' : 'black')};
  text-decoration: ${(props) => (props.completion ? 'line-through' : 'none')};
  padding: 10px 5px;

  text-decoration-color: black;
`;

export const CompleteButton = styled.button<TodoItemTextProps>`
  background-color: ${(props) => (props.completion ? '#d05a76' : 'white')};
  color: ${(props) => (props.completion ? 'white' : 'black')};
`;
