import { IsNever } from "../../src";

it("IsNever", () => {
  expect<IsNever<never>>(); // $ExpectType true

  expect<IsNever<{}>>(); // $ExpectType false
  expect<IsNever<[]>>(); // $ExpectType false
  expect<IsNever<any>>(); // $ExpectType false
  expect<IsNever<number>>(); // $ExpectType false
  expect<IsNever<string>>(); // $ExpectType false
  expect<IsNever<boolean>>(); // $ExpectType false
  expect<IsNever<unknown>>(); // $ExpectType false
  expect<IsNever<undefined>>(); // $ExpectType false

  expect<IsNever<[any]>>(); // $ExpectType false
  expect<IsNever<[never]>>(); // $ExpectType false
  expect<IsNever<[unknown]>>(); // $ExpectType false
  expect<IsNever<[undefined]>>(); // $ExpectType false
});
