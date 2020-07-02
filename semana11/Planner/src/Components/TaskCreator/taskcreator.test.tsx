import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import planner from '../../Services/planner';
import TaskCreator from './taskcreator';

planner.post = jest.fn().mockResolvedValue('');
test('TaskCreator should render properly', () => {
  const { getByTestId } = render(<TaskCreator />);

  expect(getByTestId('day-input')).toBeInTheDocument();
  expect(getByTestId('task-input')).toBeInTheDocument();
});
