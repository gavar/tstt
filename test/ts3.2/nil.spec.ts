import { Nil, Nilable } from "../../src";

it("nil", () => {
  expect<Nil>(); // $ExpectType null | undefined

  expect<Nilable<any>>(); // $ExpectType any
  expect<Nilable<never>>(); // $ExpectType never
  expect<Nilable<unknown>>(); // $ExpectType unknown

  expect<Nilable<{}>>(); // $ExpectType {} | null | undefined
  expect<Nilable<[]>>(); // $ExpectType [] | null | undefined
  expect<Nilable<number>>(); // $ExpectType number | null | undefined
  expect<Nilable<string>>(); // $ExpectType string | null | undefined
});
