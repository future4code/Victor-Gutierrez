import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskCreator from './taskcreator';
import '@testing-library/jest-dom/extend-expect';
import planner from '../../Services/planner';

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

  expect(
    planner.post,
  ).not.toHaveBeenCalledWith(
    'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-victorgutierrez',
    { day: '', text: '' },
  );
});
