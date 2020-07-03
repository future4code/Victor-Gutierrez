import { renderHook, act } from '@testing-library/react-hooks';
import useTasks from './useTask';

//Testing library for hooks

test('Should increment the amount of tasks when those are added to state', () => {
  const { result } = renderHook(() => useTasks());

  act(() => {
    result.current.push([
      {
        day: 'Domingo',
        text: 'Testing',
        id: 'GeneratedID',
      },
      {
        day: 'Segunda',
        text: 'Testing',
        id: 'GeneratedID2',
      },
    ]);
  });

  expect(result.current.length).toBe(2);
});
