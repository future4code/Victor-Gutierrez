import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import React from 'react';
import Day from './day';
import { Container } from '../TaskCreator/taskcreator_styles';
import TodoItem from '../TodoItem/todoitem';
import { Task } from '../../Types/index';

describe('Day component funcionalities', () => {
  test('Day component should render properly based on prop', () => {
    const { getByTestId } = render(<Day day="Domingo" />);

    expect(getByTestId('day-title')).toHaveTextContent(/Domingo/);
  });

  test('Day should render tasks based strictly on it`s day', () => {
    const tasks: Task[] = [
      {
        day: 'Domingo',
        text: 'Task that should be rendered',
        id: 'GeneratedID',
      },
      {
        day: 'Segunda',
        text: 'Task that SHOULD NOT be rendered',
        id: 'GeneratedID2',
      },
    ];

    const dayProp = 'Domingo';

    const { getByTestId } = render(
      <Container data-testid="container">
        <h1 data-testid="day-title">{dayProp}</h1>
        {tasks.map((item: Task) =>
          item.day === dayProp ? (
            <TodoItem id={item.id} text={item.text} key={item.id} />
          ) : (
            ''
          ),
        )}
      </Container>,
    );

    getByTestId('container');

    expect(getByTestId('container')).toHaveTextContent(
      'Task that should be rendered',
    );

    expect(getByTestId('container')).not.toHaveTextContent(
      'Task that SHOULD NOT be rendered',
    );
  });
});
