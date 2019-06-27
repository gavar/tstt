import { IF } from "../../src";

it("if", () => {
  // identity
  expect<IF<true>>(); // $ExpectType true
  expect<IF<false>>(); // $ExpectType false

  // selector
  expect<IF<true, "A">>(); // $ExpectType "A"
  expect<IF<false, "A">>(); // $ExpectType false

  // ternary
  expect<IF<true, "A", "B">>(); // $ExpectType "A"
  expect<IF<false, "A", "B">>(); // $ExpectType "B"
});
