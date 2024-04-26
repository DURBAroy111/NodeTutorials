const { readFile, writeFile } = require("fs");

let fist, second;

readFile("./Content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //const first = result;
  first = result;
  console.log(first);
});
readFile("./Content/second.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //const second = result;
  second = result;
  console.log(second);
});

readFile("./Content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //const first = result;
  first = result;

  readFile("./Content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    //const second = result;
    second = result;
    writeFile(
      "./Content/new_write_async.txt",
      `new result: ${first} + ${second}`,
      () => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
