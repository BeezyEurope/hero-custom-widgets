const addValue = 8;
const defaultValue = 8;

const xXsmall = defaultValue; // 8
const xSmall = xXsmall + addValue; // 16
const small = xSmall + addValue; // 24
const medium = small + addValue; // 32
const large = medium + addValue; // 40

const spaces = {
  defaultValue,
  xXsmall,
  xSmall,
  small,
  medium,
  large,
};

export default spaces;
