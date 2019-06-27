import { NOT, AND, OR, XOR } from "../../src";

it("operators", () => {
  // NOT
  expect<NOT<false>>(); // $ExpectType true
  expect<NOT<true>>(); // $ExpectType false

  // AND
  expect<AND<false, false>>(); // $ExpectType false
  expect<AND<false, true>>(); // $ExpectType false
  expect<AND<true, false>>(); // $ExpectType false
  expect<AND<true, true>>(); // $ExpectType true

  // OR
  expect<OR<false, false>>(); // $ExpectType false
  expect<OR<false, true>>(); // $ExpectType true
  expect<OR<true, false>>(); // $ExpectType true
  expect<OR<true, true>>(); // $ExpectType true

  // XOR
  expect<XOR<false, false>>(); // $ExpectType false
  expect<XOR<false, true>>(); // $ExpectType true
  expect<XOR<true, false>>(); // $ExpectType true
  expect<XOR<true, true>>(); // $ExpectType false
});
