import { IS } from "../../src";

it("is", () => {
  // identity
  expect<IS<any>>(); // $ExpectType true
  expect<IS<null>>(); // $ExpectType true
  expect<IS<never>>(); // $ExpectType never
  expect<IS<number>>(); // $ExpectType true
  expect<IS<string>>(); // $ExpectType true
  expect<IS<boolean>>(); // $ExpectType true
  expect<IS<unknown>>(); // $ExpectType true

  // literals identity
  expect<IS<true>>(); // $ExpectType true
  expect<IS<false>>(); // $ExpectType true
  expect<IS<{}>>(); // $ExpectType true
  expect<IS<[]>>(); // $ExpectType true

  // never
  expect<IS<any, never>>(); /* $ExpectType boolean */ // FIXME: why boolean here?
  expect<IS<never, never>>(); // $ExpectType never
  expect<IS<unknown, never>>(); // $ExpectType false
  expect<IS<{}, never>>(); // $ExpectType false

  // extends
  expect<IS<string, string>>(); // $ExpectType true
  expect<IS<number, string>>(); // $ExpectType false
  expect<IS<{ b: number }, { a: number }>>(); // $ExpectType false
  expect<IS<{ a: number, b: string }, { a: number }>>(); // $ExpectType true
});
