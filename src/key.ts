/** Type eligible for indexer signature. */
export type Index = string | number;

/** Type-safe version of {@link Index} eligible for indexer signature . */
export type IndexOf<T> = (T extends any[] ? number : string) & keyof T;

/** Synthetic type designed to safely extract keys from a specific type. */
export type KeyOf<T, K extends keyof T = keyof T> = K;

/** From `T` select keys whose values are assignable to type `V`. */
export type Key<T, V = any> = T extends any ? {
  [K in keyof T]: T[K] extends V ? K : never;
}[keyof T] : never;

/**
 * From `T` pick only those keys that are required.
 * @see https://stackoverflow.com/a/52991061/10794742
 */
export type RequiredKeys<T> = T extends any ? {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T] : never;

/**
 * From `T` pick only those keys that are required.
 * @see https://stackoverflow.com/a/52991061/10794742
 */
export type OptionalKeys<T> = T extends any ? {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T] : never;
