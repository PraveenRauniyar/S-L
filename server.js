let fs = require("fs");
let http = require("http");
const setContentType = function(res, pathName) {
  let lastIndexOfDot = pathName.lastIndexOf(".");
  let contentType = pathName.substr(lastIndexOfDot);
  let type = {
    "/": "text/html",
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".jpg": "image/jpg",
    ".png": "image/png",
  };
  res.setHeader("content-type", `${type[contentType]}`);
};

const getPathName = function(pathName) {
  if (pathName == '' || pathName == "snake.html") {
    return ("./public/snake.html");
  }
  return `./public/${pathName}`;
}

const requestHandler = function(req, res) {
  let pathName = req.url;
  pathName = pathName.slice(1);
  pathName = getPathName(pathName);
  console.log(pathName);
  fs.readFile(pathName, (err, fileData) => {
    if (err) {
      res.statusCode = 404;
    } else {
      res.write(fileData);
    };
    res.end();
    return;
  });
}

let port = 8110;
const server = http.createServer(requestHandler);
console.log(port + "  port is running");
server.listen(port);
