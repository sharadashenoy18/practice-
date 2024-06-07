const http = require("http");

const port = 8081;
http
    .createServer((req,res) => {
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write("<h2>hiiiii</h2>");
        res.end();
    }
    )
    .listen(port , () => {
        console.log(`NodeJs server Started Running on Port ${port}`);
    })