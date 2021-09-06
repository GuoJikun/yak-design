export const prefix = "yak";

export const oneOf = <T>(value: T, validList: Array<T>): boolean => {
  return validList.includes(value);
};
