import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskCreator from './taskcreator';
import axios from 'axios';

axios.post = jest.fn().mockResolvedValue('Created');

test('User should not be able to send an empty form', () => {
  const { getByText } = render(<TaskCreator />);

  const addButton = getByText('Criar Tarefa');

  userEvent.click(addButton);

  expect(axios.post).toBeCalledTimes(0);
});

test('User should  be able to send a completed form', () => {
  const { getByText } = render(<TaskCreator />);

  const addButton = getByText('Criar Tarefa');

  userEvent.click(addButton);

  expect(axios.post).toBeCalledTimes(0);
});
