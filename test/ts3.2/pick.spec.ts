import { PickU } from "../../src";

interface Props {
  a: number;
  b?: string;
}

it("PickU", () => {
  expect<PickU<Props, "a">>(); // $ExpectType { a: number; }
  expect<PickU<Props, "b">>(); // $ExpectType { b?: string | undefined; }
  expect<PickU<Props, "a" | "b">>(); // $ExpectType { a: number; b?: string | undefined; }
});
