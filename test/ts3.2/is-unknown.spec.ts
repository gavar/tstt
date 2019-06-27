import { IsUnknown } from "../../src";

it("IsUnknown", () => {
  expect<IsUnknown<unknown>>(); // $ExpectType true

  expect<IsUnknown<{}>>(); // $ExpectType false
  expect<IsUnknown<[]>>(); // $ExpectType false
  expect<IsUnknown<any>>(); // $ExpectType false
  expect<IsUnknown<false>>(); // $ExpectType false
  expect<IsUnknown<number>>(); // $ExpectType false
  expect<IsUnknown<string>>(); // $ExpectType false
  expect<IsUnknown<boolean>>(); // $ExpectType false
  expect<IsUnknown<undefined>>(); // $ExpectType false

  expect<IsUnknown<[any]>>(); // $ExpectType false
  expect<IsUnknown<[never]>>(); // $ExpectType false
  expect<IsUnknown<[unknown]>>(); // $ExpectType false
  expect<IsUnknown<[undefined]>>(); // $ExpectType false
});
