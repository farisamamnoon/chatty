const http = require("http").createServer();

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  socket.on("message", (text) => {
    socket.emit("message", text);
  });
});

http.listen(8080, () => {
  console.log("server listening to 8080");
});
