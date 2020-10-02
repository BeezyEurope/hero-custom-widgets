import getArrayOfNumber from "./getArrayOfNumber";

describe("Test getArrayOfNumber", () => {
  test("Generate array of lengh of items", () => {
    const result: number[] = getArrayOfNumber(10);

    expect(result).toEqual([0,1,2,3,4,5,6,7,8,9]);
  });

  test("Generate array of lengh of  0 items", () => {
    const result: number[] = getArrayOfNumber(0);

    expect(result).toEqual([]);
  });

  test("Generate array of  negative length", () => {
    const result: number[] = getArrayOfNumber(-10);

    expect(result).toEqual([]);
  });
});
