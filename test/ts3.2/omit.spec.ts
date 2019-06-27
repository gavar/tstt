import { OmitU } from "../../src";

it("OmitU", () => {
  // tslint:disable-next-line:interface-over-type-literal
  type Props = { a: number; b?: string; };
  expect<OmitU<Props, "a">>(); // $ExpectType { b?: string | undefined; }
  expect<OmitU<Props, "b">>(); // $ExpectType { a: number; }
  expect<OmitU<Props, "a" | "b">>(); // $ExpectType {}
});
