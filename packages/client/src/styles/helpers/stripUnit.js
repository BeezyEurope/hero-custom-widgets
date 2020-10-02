const cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;

export default function stripUnit(value, unitReturn) {
  if (typeof value !== "string") return unitReturn ? [value, undefined] : value;
  const matchedValue = value.match(cssRegex);

  if (unitReturn) {
    if (matchedValue) return [parseFloat(value), matchedValue[2]];
    return [value, undefined];
  }

  if (matchedValue) return parseFloat(value);
  return value;
}
