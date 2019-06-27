import { RequiredKeys } from "../../src";

it("RequiredKeys", () => {
  // RequiredKeys //
  expect<RequiredKeys<any>>(); // $ExpectType never
  expect<RequiredKeys<{}>>(); // $ExpectType never
  expect<RequiredKeys<{ a: number, b: string }>>(); // $ExpectType "a" | "b"
  expect<RequiredKeys<{ a: number } & { b: string }>>(); // $ExpectType "a" | "b"
  expect<RequiredKeys<{ a: number, b?: string }>>(); // $ExpectType "a"
  expect<RequiredKeys<{ a: number } | { b?: string }>>(); // $ExpectType "a"
  expect<RequiredKeys<{ a?: number } | { b: string }>>(); // $ExpectType "b"
  expect<RequiredKeys<{ a?: number, b?: string }>>(); // $ExpectType never
  expect<RequiredKeys<{ a?: number } & { b?: string }>>(); // $ExpectType never
  expect<RequiredKeys<{ a?: number } | { b?: string }>>(); // $ExpectType never
});
