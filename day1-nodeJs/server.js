console.log("Hello World!");
let http = require("http");
const server = http.createServer((req, res) => {
  res.write("Hello i am from server");
  res.end();
});
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});