/**
 * Represents an arbitrary function that receives arguments and returns a value.
 * @template R - function return type.
 * @template T - function arguments tuple type.
 */
export type Func<R = any, T extends any[] = any> = (...args: T) => R;

/**
 * Represents an arbitrary action that receives arguments but returns no result.
 * @template T - function arguments type.
 */
export type Action<T extends any[] = any> = Func<void, T>;

/**
 * Represents constructor of an object.
 * Think of typed version of {@link NewableFunction}.
 * @template R - type of the object constructor initializes.
 * @template T - type of the constructor arguments.
 */
export type Newable<R = any, T extends any[] = any> = new (...args: T) => R;

/**
 * Extracts signature of {@link Newable} from `T`.
 * Returns {@link Newable `Newable<R, T>`} if `T` is {@link Newable}; otherwise `never`.
 */
export type NewableType<T> = T extends (new (...args: infer A) => infer R) ? Newable<R, A> : never;

/**
 * Represents function that defines a set of criteria and determines whether the specified object meets those criteria.
 */
export interface Predicate<T = any, P extends any[] = []> {
  /**
   * Invoke predicate to determines whether the specified object meets criteria.
   * @param item - object to compare against the criteria.
   * @param params - extra arguments provided for evaluation.
   * @return `true` if object meets the criteria; otherwise `false`.
   */
  (item: T, ...params: P): boolean;
}

/**
 * Node style callback function.
 * @template T - type of operation outcome.
 * @template E - type of error.
 */
export type Callback<T extends any[] = never, E = Error> = T extends any
  ? ValueCallback<T, E>
  : DoneCallback<E>
  ;

/** Function waiting for an operation completion without caring about result values. */
export interface DoneCallback<E = Error> {

  /** Notify successful completion. */
  (error?: never): any;

  /**
   * Notify failure.
   * @param error - error defining a reason of operation failure.
   */
  (error: E): any;
}

/** Function waiting for an operation completion with some result values. */
export interface ValueCallback<T extends any[] = [], E = Error> {

  /** Notify successful completion without result. */
  (error?: never): any;

  /**
   * Notify failure.
   * @param error - error defining a reason of operation failure.
   */
  (error: E): any;

  /**
   * Notify successful completion with result.
   * @param error - ignore, should be null or undefined.
   * @param values - operation outcome values.
   */
  (error: undefined | null, ...values: T): any;
}
