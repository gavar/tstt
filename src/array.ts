/** Checks `T` is `any[]` type exactly. */
export type IsArray<T> = T extends any [] ? true : false;

/** Returns `T` only when `array` type. */
export type ArrayType<T> = T extends any[] ? T : never;

/**
 * Gets type of the elements in a array.
 * @template T - type of array to check.
 * @returns union type of array elements when `T` is array; never otherwise.
 */
export type ArrayElement<T> = T extends ArrayLike<infer U> ? U : never;
