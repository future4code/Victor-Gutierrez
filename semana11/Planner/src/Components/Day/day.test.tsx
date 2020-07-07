import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import Day from './day';

describe('Day component funcionalities', () => {
  test('Day component should render properly based on prop', () => {
    const { getByTestId } = render(<Day day="Domingo" />);

    expect(getByTestId('day-title')).toHaveTextContent(/Domingo/);
  });
});
