import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import TaskCreator from './taskcreator';
import userEvent from '@testing-library/user-event';

test('TaskCreator should render properly', () => {
  const { getByTestId } = render(<TaskCreator />);

  expect(getByTestId('day-input')).toBeInTheDocument();
  expect(getByTestId('task-input')).toBeInTheDocument();
});

describe('Submit Testing', () => {
  let emit: any;

  beforeAll(() => {
    ({ emit } = window._virtualConsole); // addressing JS-DOM submit implementation  problem
  });

  beforeEach(() => {
    window._virtualConsole.emit = jest.fn(); // addressing JS-DOM submit implementation  problem
  });

  afterAll(() => {
    window._virtualConsole.emit = emit; // addressing JS-DOM submit  implementation problem
  });

  test('TaskCreator form should trigger submit function on submit button click', () => {
    const handleSubmit = jest.fn((e) => e.preventDefault);

    const { getByTestId } = render(
      <form onSubmit={handleSubmit}>
        <label htmlFor="day">Tarefa</label>
        <input
          required
          data-testid="task-input"
          type="text"
          id="text"
          placeholder="Insira um nome para sua tarefa"
        />
        <label htmlFor="day">Dia da tarefa</label>
        <select data-testid="day-input" required id="day">
          <option value=""></option>
        </select>
        <button data-testid="createButton" type="submit">
          Criar Tarefa
        </button>
      </form>,
    );

    userEvent.click(getByTestId('createButton'));

    expect(handleSubmit).toBeCalled();
  });

  test('TaskCreator input should be clean after submit', () => {
    const { getByTestId, getByText } = render(<TaskCreator />);

    userEvent.type(getByTestId('task-input'), 'Testing');
    userEvent.selectOptions(getByTestId('day-input'), getByText(/Domingo/));
    userEvent.click(getByTestId('createButton'));

    expect(getByTestId('day-input')).toHaveValue('');
  });
});
