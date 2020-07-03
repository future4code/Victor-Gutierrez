import styled from 'styled-components';
import { TodoItemTextProps } from '../../Types/index';

export const TaskBox = styled.li`
  width: 80%;
  height: auto;
  border: 2px dashed gray;
  word-break: break-word;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
`;

export const TaskText = styled.p<TodoItemTextProps>`
  color: ${(props) => (props.completion ? 'gray' : 'black')};
  text-decoration: ${(props) => (props.completion ? 'line-through' : 'none')};

  text-decoration-color: black;
`;
