const http = require("http");
const port = 8081; // local port num

// HTTP Methods

/*
>> GET: Inorder to get data from server
>> POST: Sending data to server
>> DELETE: Deleting the data from database
>> PATCH: Updating certain fields
>> PUT: Full Update
*/

const toDoList = ["learn", "apply things", "succeed"];

http
  .createServer((req, res) => {
    // call back func
    const { method, url } = req;
    // console.log(method, url);
    if (url === "/todos") {
      if (method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(toDoList.toString());
      }else{
        res.writeHead(501);
      }
    }
        res.end(); // End the response after writing the content
      
    // If the URL is not "/todos" or method is not GET, the response will be empty
    // because we haven't written anything to it
  })
  .listen(port, () => {
    // call back func
    console.log(`NodeJs Server Started Running on Port: ${port}`);
  });
