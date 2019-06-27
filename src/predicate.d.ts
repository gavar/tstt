import { IF, IS, WHEN } from "./operator";

/** Checks `T` is `any` type exactly. */
export type IsAny<T> = IS<[T], T & [undefined]>;

/** Returns `T` only when `any` type. */
export type AnyType<T> = WHEN<IsAny<T>, T>;

/** Checks `T` is `never` type exactly. */
export type IsNever<T> = IS<[T], [never]>;

/** Checks `T` is `unknown` type exactly. */
export type IsUnknown<T> = IF<IsAny<T>, false, IS<unknown, T>>;

/** Returns `T` only when `unknown` type. */
export type UnknownType<T> = WHEN<IsUnknown<T>, T>;
