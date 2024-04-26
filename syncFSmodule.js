// const { readfilesync, writefilesync } = require("fs");
// const first = readfilesync("./Content/first.txt", "utf8");
// const second = readfilesync("./Content/second.txt", "utf8");

// console.log(first);
// console.log(second);

// writefilesync(
//   "./Content/write_async.txt",
//   `result: ${first} ${second}`,
//   "utf8"
// );

const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./Content/first.txt", "utf8");
const second = readFileSync("./Content/second.txt", "utf8");

console.log(first);
console.log(second);

writeFileSync("./Content/write_sync.txt", `result: ${first} ${second}`, "utf8");

writeFileSync("./Content/write_sync.txt", `result: ${first} ${second}`, {
  flag: "a",
});
