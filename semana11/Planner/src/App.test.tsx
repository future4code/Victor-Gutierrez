import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App child rendering and funcionalities', () => {
  test('App should render children TaskCreator properly ', () => {
    const { getByTestId } = render(<App />);

    // TaskCreator Component
    const dayInput = getByTestId('day-input');
    const createButton = getByTestId('createButton');
    const TaskInput = getByTestId('task-input');

    expect(dayInput).toBeInTheDocument();
    expect(createButton).toBeInTheDocument();
    expect(TaskInput).toBeInTheDocument();
  });

  test('App should render children Day properly ', () => {
    const { queryAllByTestId } = render(<App />);

    // Day Component

    const dayTitle = queryAllByTestId('day-title');

    expect(dayTitle).toHaveLength(7);
  });

  test('App should render children Header properly ', () => {
    const { getByTestId } = render(<App />);

    //Header Component

    const headerLogo = getByTestId('logo');

    expect(headerLogo).toBeInTheDocument();
    expect(headerLogo).toHaveTextContent('Planner');
  });

  test('App should render children Week properly ', () => {
    const { getByTestId } = render(<App />);

    //Week Component

    const dayContainer = getByTestId('day-container');

    expect(dayContainer).toBeInTheDocument();
    expect(dayContainer).toHaveTextContent('Domingo');
  });
});
