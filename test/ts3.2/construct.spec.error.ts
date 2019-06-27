/// <reference path="../../lib/lib.es2015.reflect.d.ts"/>
import { A$$, A0, A1, A1$, A2, N$$, N0, N1, N1$, N2 } from "./class";

Reflect.construct(N0, [1]); // $ExpectError
Reflect.construct(N0, [1, "2"]); // $ExpectError

Reflect.construct(N1, []); // $ExpectError
Reflect.construct(N1, [1, 2]); // $ExpectError

Reflect.construct(N2, []); // $ExpectError
Reflect.construct(N2, [1]); // $ExpectError
Reflect.construct(N2, [1, 2]); // $ExpectError
Reflect.construct(N2, [1, "A", 3]); // $ExpectError

Reflect.construct(N1$, []); // $ExpectError
Reflect.construct(N1$, [1, 2]); // $ExpectError
Reflect.construct(N1$, [1, "A", 3]); // $ExpectError

Reflect.construct(N$$, [1, 2]); // $ExpectError
Reflect.construct(N$$, [1, "A", 3]); // $ExpectError

Reflect.construct(A0, []); // $ExpectError
Reflect.construct(A1, [1]); // $ExpectError
Reflect.construct(A2, [1, "A"]); // $ExpectError
Reflect.construct(A1$, [1, "A"]); // $ExpectError
Reflect.construct(A$$, [1, "A"]); // $ExpectError
