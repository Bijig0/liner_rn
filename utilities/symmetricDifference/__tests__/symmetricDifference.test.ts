import symmetricDifference from "../symmetricDifference";

it("gets the symmetric difference between two number arrays", () => {
  const iterableOne = [1, 2, 3, 4];
  const iterableTwo = [1, 2];
  const actualResult = symmetricDifference(iterableOne, iterableTwo);
  const expectedResult = [3, 4];
  expect(actualResult).toEqual(expectedResult);
});
