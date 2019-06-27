/** Returns `false` when `T` is `true`; otherwise returns `true`. */
export type NOT<T extends boolean> = T extends false ? true : false;

/** Returns `true` when both the operands are `true`; otherwise returns `false`. */
export type AND<A extends boolean, B extends boolean> = A extends false ? false : B extends false ? false : true;

/** Returns `true` if at least one of the operands is `true`; otherwise returns `false`. */
export type OR<A extends boolean, B extends boolean> = A extends true ? true : B extends true ? true : false;

/** Returns `true` if only one of the operands is `true` and the other operand is false; otherwise returns `false`. */
export type XOR<A extends boolean, B extends boolean> = A extends false
  ? B extends true ? true : false
  : B extends false ? true : false;

/**
 * Ternary operator checking `A` matches `B`, think of `A <= B`.
 * @template T - type to check.
 * @template U - type to match.
 * @template THEN - type to return when `T <= U`.
 * @template ELSE - type to return otherwise.
 */
export type IS<T, U = T, THEN = true, ELSE = false> = T extends U ? THEN : ELSE;

/**
 * Ternary operator checking `A` exactly match `B`, think of `A == B`.
 * @template T - type to check.
 * @template U - type to match.
 * @template THEN - type to return when `T == U`.
 * @template ELSE - type to return otherwise.
 */
export type EQ<T, U = T, THEN = true, ELSE = false> = U extends T ? T extends U ? THEN : ELSE : ELSE;

/**
 * Ternary operator which allows to writing concise conditional mappings.
 * @template T - type defining condition to check.
 * @template THEN - type to return when `T` is `true`.
 * @template ELSE - type to return otherwise.
 * @returns `THEN` when condition `T` is `true`; otherwise `ELSE`.
 */
export type IF<T extends boolean, THEN = true, ELSE = false> = IS<T, true, THEN, ELSE>;

/**
 * Ternary operator which allows to writing concise conditional mappings.
 * Unlike {@link IF}, returns type itself (by default) when condition is `true`.
 * When condition not met returns `never` by default.
 */
export type WHEN<T extends boolean, THEN, ELSE = never> = IS<T, true, THEN, ELSE>;

/**
 * Ternary operator checking `A` matches `B`, think of `A <= B`.
 * Same as {@link IS} but instead of returning boolean returns a type.
 */
export type LIKE<T, U = T, THEN = T, ELSE = never> = IS<T, U, THEN, ELSE>;

/**
 * Ternary operator checking `A` exactly match `B`, think of `A == B`.
 * Same as {@link EQ} but instead of returning boolean returns a type.
 */
export type EXACT<T, U = T, THEN = T, ELSE = never> = EQ<T, U, THEN, ELSE>;
