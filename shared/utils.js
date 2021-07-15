export const select = (dynamicValue, values, defaultValue = values[0]) =>
  values.find(item => item === dynamicValue) ?? defaultValue;

// todo: create a util like phoneLink and put all this stuff in: export * from './phone';
export const formatPhone = ({ code, prefix, digits: rawDigits }) => {
  const STEP = 2;
  const digits = [];
  let stringifiedDigits = rawDigits.toString();

  while (stringifiedDigits.length - STEP > STEP) {
    digits.unshift(stringifiedDigits.slice(-STEP));
    stringifiedDigits = stringifiedDigits.slice(0, -STEP);
  }

  if (stringifiedDigits) {
    digits.unshift(stringifiedDigits);
  }

  return `+${code} (${prefix}) ${digits.join('-')}`;
};
