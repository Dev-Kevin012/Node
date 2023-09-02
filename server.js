import http from "http";

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  if (url === "/home") {
    res.write("<html>");
    res.write("<head><title>Home Page</title></head>");
    res.write("<body><h1>Welcome Home</h1></body>");
    res.write("</html>");
  } else if (url === "/about") {
    res.write("<html>");
    res.write("<head><title>About Page</title></head>");
    res.write("<body><h1>Welcome to About Us page</h1></body>");
    res.write("</html>");
  } else if (url === "/node") {
    res.write("<html>");
    res.write("<head><title>Node Page</title></head>");
    res.write("<body><h1>Welcome to my Node Js project</h1></body>");
    res.write("</html>");
  }
  res.end();
});

server.listen(5000, () => {
  console.log("Server Listening on Port 5000!");
});
