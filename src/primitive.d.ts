/** Represents type of nothing, alias for `null | undefined` */
export type Nil = null | undefined;

/** Make type `T` assignable to {@link Nil}. */
export type Nilable<T> = T extends any ? T | Nil : never;

/** All the possible values returned by {@code typeof} operator. */
export type TypeOf =
  | "undefined"
  | "boolean"
  | "number"
  | "string"
  | "symbol"
  | "object"
  | "function"
  ;
