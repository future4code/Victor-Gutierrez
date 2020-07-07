import React from 'react';
import Header from './header';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Header Rendering', () => {
  test('Header should render properly', () => {
    const { getByText } = render(<Header />);
    const HeaderTitle = getByText('Planner');

    expect(HeaderTitle).toBeInTheDocument();
  });
});
