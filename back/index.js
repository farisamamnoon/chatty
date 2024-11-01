const http = require("http").createServer((req, res) => {
  res.end("HG");
});

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  socket.on("message", (text) => {
    io.emit("message", `message: ${text}`);
  });
});

http.listen(8080, () => {
  console.log("server listening to 8080");
});
