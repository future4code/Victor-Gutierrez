import { sortArray } from "./ex4";

describe("sorting without using javascript native methods", () => {
  it("Returns an array sorted by value", () => {
    const sorted = [5, 6, 2];

    const result = sortArray(sorted);

    expect(result).toStrictEqual([2, 5, 6]);
  });
});
