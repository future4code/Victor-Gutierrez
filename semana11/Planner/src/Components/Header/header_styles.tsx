import styled from 'styled-components';
import { Container as ContainerFromTaskCreator } from '../TaskCreator/taskcreator_styles';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 250px;
  width: 100%;
  color: black;
  background: #d05a76;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    flex: 3;
    text-align: center;
    color: white;
  }

  ${ContainerFromTaskCreator} {
    flex: 1;
    position: sticky;
    top: 1px;
    bottom: 10px;
  }
`;
