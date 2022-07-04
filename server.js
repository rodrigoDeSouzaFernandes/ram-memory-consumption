const http = require("http");

const host = "http://localhost";
const port = 3000;

http
  .createServer((req, res) => {
    res.end("oi");
  })
  .listen(3000, () => console.log(`Server is running in ${host}${port}`));
