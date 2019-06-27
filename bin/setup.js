const path = require("path");

/**
 * Function that hijacks {@link path.join} in order to substitute name of "tsconfig.json".
 * This is required to avoid Typescript Language Service to report errors of $ExpectError.
 * That's the only known way to specify different name for the "tsconfig.json"
 */
function hijackPathJoinTsConfig() {
  const {join} = path;
  path.join = function () {
    if (arguments[arguments.length - 1] !== "tsconfig.json")
      return join.apply(path, arguments);

    const args = Array.from(arguments);
    args[args.length - 1] = "tsconfig.dtslint.json";
    return join.apply(path, args);
  };
}

hijackPathJoinTsConfig();

