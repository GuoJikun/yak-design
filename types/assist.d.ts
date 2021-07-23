declare module assist {
  function oneOf<T>(value: T, validList: Array<T>): Boolean;
  const prefix: String;
  export { oneOf, prefix };
}

declare function oneOf<T>(value: T, validList: Array<T>): Boolean;
declare const prefix: String;
