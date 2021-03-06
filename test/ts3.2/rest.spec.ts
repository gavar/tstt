import { Rest } from "../../src";

it("Rest", () => {
  expect<Rest>(); // $ExpectType never
  expect<Rest<any>>(); // $ExpectType [any]
  expect<Rest<number>>(); // $ExpectType [number]
  expect<Rest<string>>(); // $ExpectType [string]
  expect<Rest<unknown>>(); // $ExpectType [unknown]
  expect<Rest<undefined>>(); // $ExpectType [undefined]

  expect<Rest<[any]>>(); // $ExpectType [any]
  expect<Rest<[string]>>(); // $ExpectType [string]
  expect<Rest<[number]>>(); // $ExpectType [number]
  expect<Rest<[unknown]>>(); // $ExpectType [unknown]
  expect<Rest<[undefined]>>(); // $ExpectType [undefined]

  expect<Rest<[number, string]>>(); // $ExpectType [number, string]
  expect<Rest<[number, string, boolean]>>(); // $ExpectType [number, string, boolean]

  // FIXME: should be [number?]
  expect<Rest<[number?]>>(); // $ExpectType [(number | undefined)?]
  // FIXME: should be [number, string?]
  expect<Rest<[number, string?]>>(); // $ExpectType [number, (string | undefined)?]
  // FIXME: should be [number?, string?]
  expect<Rest<[number?, string?]>>(); // $ExpectType [(number | undefined)?, (string | undefined)?]
});
