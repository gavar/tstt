import { EQ } from "../../src";

it("eq", () => {
  expect<Exclude<"a" | "b", "a" | "b">>(); // $ExpectType never
  expect<Exclude<"a", "a" | "b">>(); // $ExpectType never
  expect<Exclude<"a" | "b", "b">>(); // $ExpectType "a"

  expect<EQ<{ a: any }, { a: any }>>(); // $ExpectType true
  expect<EQ<{ a: string }, { a: string }>>(); // $ExpectType true
  expect<EQ<{ a?: string }, { a?: string }>>(); // $ExpectType true
  expect<EQ<{ a: string }, { a: number }>>(); // $ExpectType false
  expect<EQ<{ a?: string }, { a: string }>>(); // $ExpectType false
  expect<EQ<{ a?: string }, { b?: string }>>(); // $ExpectType false

  expect<EQ<{ a: number; b?: string; }, { b: string }>>(); // $ExpectType false
});
