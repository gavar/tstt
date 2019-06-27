const child = require("child_process");
const setup = normalize(require.resolve("./setup"));
const dtslint = normalize(require.resolve("dtslint"));

// require setup file before running
const exec = ["node", "-r", setup, dtslint];
const args = process.argv.slice(2);
console.log(...exec.concat(args));

// run dtslint
const proc = child.spawn(exec.join(" "), args, {
    shell: true,
    stdio: "inherit",
  },
);

proc.on("exit", process.exit);
module.exports = proc;

function normalize(filename) {
  return filename.replace(/\\/g, "/");
}
