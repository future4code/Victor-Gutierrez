import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import TodoItem from './todoitem';

describe('TodoItem funcionalities', () => {
  test('TodoItem should render properly based on passed props', () => {
    const { getByText } = render(<TodoItem id="TaskID" text="TaskName" />);
    const TaskTitle = getByText('TaskName');

    expect(TaskTitle).toBeInTheDocument();
  });

  test('Edit mode should be reachable', () => {
    const { getByText, getByPlaceholderText } = render(
      <TodoItem id="TaskID" text="TaskName" />,
    );

    const EditToggle = getByText('Editar');

    userEvent.click(EditToggle);

    expect(getByPlaceholderText('Insira o novo conteúdo')).toBeInTheDocument(); //toBeInTheDOM will be deprecated
  });

  test('Edit mode should be avoidable', () => {
    const {
      getByText,
      getByPlaceholderText,
      queryByText,
      queryByPlaceholderText,
    } = render(<TodoItem id="TaskID" text="TaskName" />);

    const EditToggle = getByText('Editar');

    userEvent.click(EditToggle);

    expect(getByPlaceholderText('Insira o novo conteúdo')).toBeInTheDocument();

    const Cancel = getByText(/Cancelar/);

    userEvent.click(Cancel);

    expect(queryByText('Enviar')).toBeNull();
    expect(queryByPlaceholderText('Insira o novo conteúdo')).toBeNull();
  });

  test('Edit mode should close in ESC keypress', () => {
    const { getByText, getByPlaceholderText, queryByText } = render(
      <TodoItem id="TaskID" text="TaskName" />,
    );

    const EditToggle = getByText('Editar');

    userEvent.click(EditToggle);

    expect(getByPlaceholderText('Insira o novo conteúdo')).toBeInTheDocument();

    userEvent.type(getByPlaceholderText('Insira o novo conteúdo'), '{esc}');

    expect(queryByText('Insira o novo conteúdo')).toBeNull();
  });

  test('User should be able to perform a non-persistent completion of task', () => {
    const { getByText } = render(<TodoItem id="TaskID" text="TaskName" />);

    const TaskText = getByText('TaskName');
    const CompleteButton = getByText('Completar');

    userEvent.click(CompleteButton);

    expect(TaskText).toHaveStyle('text-decoration: line-through');
    expect(CompleteButton).toHaveTextContent('Atividade Completa!');
  });

  test('Delete task button should render properly', async () => {
    const { getByText } = render(<TodoItem id="TaskID" text="TaskName" />);

    const DeleteButton = getByText('Deletar');

    userEvent.click(DeleteButton);

    expect(DeleteButton).not.toBeNull();
  });
});
