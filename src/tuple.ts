/**
 * Converts {@template T} to rest parameters.
 * Does nothing when provided type already implements an array.
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#generic-rest-parameters
 */
export type Rest<T = never> =
  [T] extends T & [undefined] ? [any] // is any?
    : T extends any[] ? T  // is array?
    : [T]; // arrify
