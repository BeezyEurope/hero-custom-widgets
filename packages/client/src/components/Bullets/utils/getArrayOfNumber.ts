function getArrayOfNumber(length: number): number[] {
  try {
    return Array.from(
      Array(length),
      (value: undefined, key: number): number => key
    );
  } catch (e) {
    return Array.from([]);
  }
}

export default getArrayOfNumber;
