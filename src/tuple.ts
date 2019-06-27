import { IsArray } from "./array";
import { WHEN } from "./operator";
import { IsAny } from "./predicate";

/**
 * Converts {@template T} to rest parameters.
 * Does nothing when provided type already implements an array.
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#generic-rest-parameters
 */
export type Rest<T = unknown> = WHEN<IsArray<T>, WHEN<IsAny<T>, never, T>>;
