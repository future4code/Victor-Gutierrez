import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import TaskCreator from './taskcreator';
import userEvent from '@testing-library/user-event';

describe('TaskCreator render test', () => {
  test('TaskCreator should render properly', () => {
    const { getByTestId, getByText } = render(<TaskCreator />);

    expect(getByTestId('day-input')).toBeInTheDocument();
    expect(getByTestId('task-input')).toBeInTheDocument();
    expect(getByText('Criar Tarefa')).toBeInTheDocument();
  });
});

describe('TaskCreator Submit Testing', () => {
  test('TaskCreator input should be clean after submit', () => {
    const { getByTestId, getByText } = render(<TaskCreator />);

    userEvent.type(getByTestId('task-input'), 'Testing');
    userEvent.selectOptions(getByTestId('day-input'), getByText(/Domingo/));
    userEvent.click(getByTestId('createButton'));

    expect(getByTestId('day-input')).toHaveValue('');
  });
});
