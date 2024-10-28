const http = require("http").createServer((req, res) => {
  console.log("The server is running properly");
});

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  socket.on("message", (text) => {
    socket.emit("message", text);
  });
});

http.listen(5000, () => {
  console.log("server listening to 5000");
});
