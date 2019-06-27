import { Newable } from "./function";
import { Key, RequiredKeys } from "./key";

/** Removes `readonly` from all properties in `T`. */
export type Mutable<T> = { -readonly [P in keyof T]: T[P]; };

/** From `T` pick only those properties that match type `U`. */
export type PickBy<T, U> = Pick<T, Key<T, U>>;

/** From `A` pick properties that exists in `B`. */
export type Subset<A, B> = Pick<A, Extract<keyof A, keyof B>>;

/** Make optional only specific keys, but leave other keys as is. */
export type Partially<T, K extends keyof T> = Pick<T, Exclude<RequiredKeys<T>, K>> & Partial<T>;

/** Make all properties partial as well as nested objects. */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeepPartial<U>>
      : DeepPartial<T[P]>
};

/**
 * Construct a type with the properties of T except for those in type K.
 */
export type Omit<T, K extends keyof any> = {
  [P in Exclude<keyof T, K>]: T[P]
};

/**
 * Construct a type with the properties of T except for those in type K.
 * Unlike {@link Omit} restricts `K` to be `keyof T`, think of strict type safe alias.
 */
export type OmitStrict<T, K extends keyof T> = Omit<T, K>;

/**
 * From `T` pick a set of properties whose keys are in the union `K`.
 * Preserves optional properties as oppose to {@link Pick}.
 * @see https://github.com/Microsoft/TypeScript/issues/28483#issuecomment-438084079
 */
export type PickU<T, K extends keyof T> = T extends any ? {
  [P in K]: T[P];
} : never;

/**
 * Construct a type with the properties of `T` except for those in type `K`.
 * Preserves optional properties as oppose to {@link Omit}.
 * @see https://github.com/Microsoft/TypeScript/issues/28483#issuecomment-438084079
 */
export type OmitU<T, K extends keyof T> = PickU<T, Exclude<keyof T, K>>;

/**
 * Represents an object prototype, where constructor have same amount of arguments, as number of non-void generic arguments.
 * @template R - type of the object constructor initializes.
 * @template T - type of the constructor arguments.
 * @experimental
 */
export interface Prototype<R = any, T extends any[] = never> {
  constructor: Newable<R, T>;
}

/**
 * Defines abstract class, that doesn't have constructor.
 * @experimental
 */
export interface Abstract<T = any> {
  /** @inheritDoc */
  prototype: T;
}
