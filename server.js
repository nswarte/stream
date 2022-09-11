const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Access-Control-Allow-Origin': '*' } );
  res.write("initial\n");
  setTimeout(_ => {
    res.write("first\n");
    setTimeout(_ => {
      res.write("second\n");
      setTimeout(_ => {
        res.end("end\n");
      }, 2000);
    }, 2000);
  }, 2000);
});

server.listen(9001);
