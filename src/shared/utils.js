export const select = (dynamicValue, values, defaultValue = values[0]) =>
  values.find(item => item === dynamicValue) ?? defaultValue;
