import { IsAny } from "../../src";

it("IsAny", () => {
  expect<IsAny<any>>(); // $ExpectType true

  expect<IsAny<{}>>(); // $ExpectType false
  expect<IsAny<[]>>(); // $ExpectType false
  expect<IsAny<never>>(); // $ExpectType false
  expect<IsAny<number>>(); // $ExpectType false
  expect<IsAny<string>>(); // $ExpectType false
  expect<IsAny<boolean>>(); // $ExpectType false
  expect<IsAny<unknown>>(); // $ExpectType false
  expect<IsAny<undefined>>(); // $ExpectType false

  expect<IsAny<[any]>>(); // $ExpectType false
  expect<IsAny<[never]>>(); // $ExpectType false
  expect<IsAny<[unknown]>>(); // $ExpectType false
  expect<IsAny<[undefined]>>(); // $ExpectType false

  // check results of pure `extends`
  type $IsAny$<T> = T extends any ? true : never;
  expect<$IsAny$<any>>(); // $ExpectType true
  expect<$IsAny$<null>>(); // $ExpectType true
  expect<$IsAny$<never>>(); // $ExpectType never
  expect<$IsAny$<number>>(); // $ExpectType true
  expect<$IsAny$<string>>(); // $ExpectType true
  expect<$IsAny$<boolean>>(); // $ExpectType true
  expect<$IsAny$<unknown>>(); // $ExpectType true
  expect<$IsAny$<undefined>>(); // $ExpectType true

  expect<$IsAny$<{}>>(); // $ExpectType true
  expect<$IsAny$<[]>>(); // $ExpectType true
  expect<$IsAny$<[any]>>(); // $ExpectType true
  expect<$IsAny$<[unknown]>>(); // $ExpectType true
});
