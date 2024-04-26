const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
  // res.write("This is the homepage");
  // res.end();
  if (req.url === "/") {
    res.end("Welcome to the HomePage");
  }
  if (req.url === "/about") {
    res.end("This is the about page");
  }
  res.end(`
      <h1>page not found</h1>
      <p>try other url</p>
      <a href="/">back to homepage</a>
    `);
});

server.listen(5000);
