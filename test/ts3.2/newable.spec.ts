import { NewableType, Newable } from "../../src";
import { A$$, A0, A1, A1$, A2, N$$, N0, N1, N1$, N2 } from "./class";

it("Newable", () => {
  expect<NewableType<typeof N0>>(); // $ExpectType Newable<N0, []>
  expect<NewableType<typeof N1>>(); // $ExpectType Newable<N1, [number]>
  expect<NewableType<typeof N1$>>(); // $ExpectType Newable<N1$, [number, (string | undefined)?]>
  expect<NewableType<typeof N2>>(); // $ExpectType Newable<N2, [number, string]>
  expect<NewableType<typeof N$$>>(); // $ExpectType Newable<N$$, [(number | undefined)?, (string | undefined)?]>

  expect<NewableType<typeof A0>>(); // $ExpectType never
  expect<NewableType<typeof A1>>(); // $ExpectType never
  expect<NewableType<typeof A1$>>(); // $ExpectType never
  expect<NewableType<typeof A2>>(); // $ExpectType never
  expect<NewableType<typeof A$$>>(); // $ExpectType never

  expect<ConstructorParameters<Newable>>(); // $ExpectType any
  expect<ConstructorParameters<Newable<N0>>>(); // $ExpectType any
  expect<ConstructorParameters<Newable<N0, []>>>(); // $ExpectType []
  expect<ConstructorParameters<Newable<N1, [number]>>>(); // $ExpectType [number]
});
