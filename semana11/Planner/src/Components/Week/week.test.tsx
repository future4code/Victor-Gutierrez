import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';

import Week from './week';

describe('Week component funcionalities', () => {
  test('Week component should render every day of week once', () => {
    const { getAllByTestId } = render(<Week />);

    const Day = getAllByTestId('day-title'); // Reaching the seven Day components rendered

    expect(Day).toHaveLength(7);
  });
});
