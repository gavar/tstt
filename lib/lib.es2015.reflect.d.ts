declare namespace Reflect {
  /**
   * Strongly typed version of {@link Reflect#construct}
   * @param ctor - object constructor.
   * @param args - arguments to pass into constructor.
   */
  function construct<T extends new (...args: any[]) => any>(ctor: T, args: ConstructorParameters<T>): InstanceType<T>;
}
