import React from 'react';

import Header from './header';
import { render } from '@testing-library/react';

test('Header should render properly', () => {
  const { queryByText } = render(<Header />);

  const HeaderTitle = queryByText('Planner');
  const HeaderSubtitle = queryByText('A way to keep your schedules ');

  expect(HeaderTitle).toBeDefined();
  expect(HeaderSubtitle).toBeDefined();
});
