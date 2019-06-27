import { EQ, Partially } from "../../src";

interface Props {
  a: number;
  b: string;
  c?: object;
}

it("Partially", () => {
  expect<keyof Partially<Props, "a">>(); // $ExpectType "a" | "b" | "c"
  expect<EQ<Partially<Props, "a">, { a: number; b: string; c?: object }>>(); // $ExpectType false
  expect<EQ<Partially<Props, "a">, { a?: number; b: string; c?: object }>>(); // $ExpectType true
  expect<EQ<Partially<Props, "a">, { b: string; }>>(); // $ExpectType true
});
