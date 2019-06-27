import { N$$, N0, N1, N1$, N2 } from "./class";

describe("Reflect", () => {
  it("Reflect.construct", () => {
    const $1 = Reflect.construct(N0, []); // $ExpectType N0
    const $2 = Reflect.construct(N1, [1]); // $ExpectType N1
    const $3 = Reflect.construct(N2, [1, "A"]); // $ExpectType N2
    const $4 = Reflect.construct(N1$, [1]); // $ExpectType N1$
    const $5 = Reflect.construct(N1$, [1, "A"]); // $ExpectType N1$
    const $6 = Reflect.construct(N$$, []); // $ExpectType N$$
    const $7 = Reflect.construct(N$$, [1]); // $ExpectType N$$
    const $8 = Reflect.construct(N$$, [1, "A"]); // $ExpectType N$$

    expect($1 instanceof N0).toBe(true);
    expect($2 instanceof N1).toBe(true);
    expect($3 instanceof N2).toBe(true);
    expect($4 instanceof N1$).toBe(true);
    expect($5 instanceof N1$).toBe(true);
    expect($6 instanceof N$$).toBe(true);
    expect($7 instanceof N$$).toBe(true);
    expect($8 instanceof N$$).toBe(true);
  });
});
