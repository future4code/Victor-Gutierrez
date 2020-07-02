import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import planner from '../../Services/planner';
import TaskCreator from './taskcreator';

jest.mock('../../Services/planner.ts');
test('TaskCreator should render properly', () => {
  const { getByTestId } = render(<TaskCreator />);

  expect(getByTestId('day-input')).toBeInTheDocument();
  expect(getByTestId('task-input')).toBeInTheDocument();
});

test('User should not be able to send an empty form', () => {
  const { getByText } = render(<TaskCreator />);

  const addButton = getByText('Criar Tarefa');

  userEvent.click(addButton);

  expect(planner.post).not.toBeCalledWith('', { day: '', text: '' });
});

test('User should be able to create a new task', async () => {
  const { getByText, getByTestId } = render(<TaskCreator />);

  const addButton = getByTestId('createButton');
  const taskInput = getByTestId('task-input');
  const selectInput = getByTestId('day-input');
  const generatedTextInput = 'Teste automatizado gerado 123';

  await userEvent.type(taskInput, generatedTextInput);
  userEvent.selectOptions(selectInput, getByText(/Domingo/));
  userEvent.click(addButton);

  expect(planner.post).toBeCalled();
});
