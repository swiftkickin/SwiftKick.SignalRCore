"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SignalR = require("@aspnet/signalr-client");
var btn = document.getElementById("btnSend");
btn.addEventListener("click", function () { return sendMessage(); });
function sendMessage() {
    var messageToSend = document.getElementById("messageToSend");
    var val = messageToSend.value;
    connection.invoke("broadcastMessage", val);
}
var connection = new SignalR.HubConnection("/chatHub");
connection.on("writeMessage", function (message) {
    var el = document.getElementById("messages");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(message));
    el.appendChild(li);
});
connection.start().then(function () { console.log("Connected"); });
//# sourceMappingURL=app.js.map