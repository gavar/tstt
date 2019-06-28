# TypeScript Type Library

[![NPM](https://img.shields.io/npm/v/tstt.svg)](https://www.npmjs.com/package/tstt)
[![CircleCI](https://img.shields.io/circleci/build/github/gavar/tstt.svg)](https://circleci.com/gh/gavar/tstt/tree/master)
[![Dependencies](https://img.shields.io/david/gavar/tstt.svg)](https://david-dm.org/gavar/tstt)
[![Downloads](https://img.shields.io/npm/dt/tstt.svg)](https://www.npmjs.com/package/tstt)
[![GitHub](https://img.shields.io/github/license/gavar/tstt.svg)](https://github.com/gavar/tstt/blob/master/LICENSE)

Intention is to collect useful abstract type operators in one place, so you can stop copying and pasting these solutions into project after project.
Library is designed to be fully static, i.e. it has no runtime component, only a type definition file.

## Installation
Install as any other npm package, preferably as development dependency.
```
# NPM 
npm i tstt --save-dev

# Yarn
yarn add tstt --dev
```

## Usage
* Import types you want to use: <br>
`import { ... } from "tstt"`.
 
* Enable enhancements of native TypeScript types by including any of [lib.*.d.ts](./lib) files.
 your tsconfig.json:
```
# tsconfig.json
{
  "compilerOptions": { ... }
  "include": {
    "node_modules/tstt/lib/lib.es5.d.ts"
  }
}
```
or by using [Triple-Slash Directives](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html):
```
/// <reference path="../../lib/lib.es2015.reflect.d.ts"/>
```

## Contributing
Read [contribution guide](./CONTRIBUTING.md) to learn about development process.

## Related Projects
- [utility-types](https://github.com/piotrwitek/utility-types)
- [Typical](https://github.com/tycho01/typical)
- [SimplyTyped](https://github.com/andnp/SimplyTyped)
- [ts-essentials](https://github.com/krzkaczor/ts-essentials)
- [TypeZoo](https://github.com/pelotom/type-zoo)
- [ts-types-utils](https://github.com/LeDDGroup/ts-types-utils)
- [extended-typescript-types](https://github.com/rajzik/extended-typescript-types)

## License
[MIT License](./LICENSE).
