/** Represents type of nothing, alias for `null | undefined` */
export type Nil = null | undefined;

/** Make type `T` assignable to {@link Nil}. */
export type Nilable<T> = T extends any ? T | Nil : never;

/**
 * Value that is considered false when encountered in a {@link Boolean} context.
 * https://developer.mozilla.org/en-US/docs/Glossary/falsy
 */
export type Falsy = false | 0 | "" | null | undefined;

/**
 * Value that is considered true when encountered in a {@link Boolean} context.
 * https://developer.mozilla.org/en-US/docs/Glossary/truthy
 */
export type Truthy<T = any> = T extends Falsy ? never : T;

/** All the possible values returned by {@code typeof} operator. */
export type TypeOf =
  | "undefined"
  | "boolean"
  | "number"
  | "string"
  | "symbol"
  | "object"
  | "function"
  | "bigint"
  ;
