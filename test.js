// const socket = io("https://chat-2ir7.onrender.com");
const socket = io("ws://localhost:8080");

socket.on("message", (message) => {
  const el = document.createElement("li");
  el.innerHTML = message;
  document.querySelector("ul").appendChild(el);
});

document.querySelector("button").onclick = () => {
  const text = document.querySelector("input").value;
  socket.emit("message", text);
};
