const http = require("http");
const fs = require("fs");

const json = fs.readFileSync("todos.json", "utf-8");
const todo = JSON.stringify(json);

const server = http.createServer((req, res) => {
    const url = req.url;
    res.end(todo)

})
server.listen(3000, () => {
    console.log("server is runnig")
})