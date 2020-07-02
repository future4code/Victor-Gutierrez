import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import TaskCreator from './taskcreator';
import userEvent from '@testing-library/user-event';
import planner from '../../Services/planner';

test('TaskCreator should render properly', () => {
  const { getByTestId } = render(<TaskCreator />);

  expect(getByTestId('day-input')).toBeInTheDocument();
  expect(getByTestId('task-input')).toBeInTheDocument();
});

test('TaskCreator input should clean after submit', async () => {
  const { getByTestId, getByText } = render(<TaskCreator />);

  userEvent.type(getByTestId('task-input'), 'Testing');
  userEvent.selectOptions(getByTestId('day-input'), getByText(/Domingo/));
  userEvent.click(getByTestId('createButton'));

  expect(getByTestId('day-input')).toHaveValue('');
});
