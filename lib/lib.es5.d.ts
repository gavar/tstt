/**
 * Sets default type value of the {@link Promise},
 * so it could be used without explicitly defining return type.
 */
interface Promise<T = unknown> {}

/**
 * Sets default type value of the {@link ArrayLike},
 * so it could be used without explicitly defining element type.
 */
interface ArrayLike<T = unknown> {}

/**
 * Enhance type definitions of {@link ObjectConstructor}.
 */
interface ObjectConstructor {
  keys<T>(o: T): Array<keyof T>;
}
