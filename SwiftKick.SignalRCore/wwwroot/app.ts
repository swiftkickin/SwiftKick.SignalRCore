import * as SignalR from "@aspnet/signalr";
import * as msgPack from "@aspnet/signalr-protocol-msgpack";

let btn = document.getElementById("btnSend");
btn.addEventListener("click", () => sendMessage());

function sendMessage(): any {
    let messageToSend = (<HTMLInputElement>document.getElementById("messageToSend"));
    let val = messageToSend.value;
    connection.invoke("broadcastMessage", val);
}

var connection = new SignalR.HubConnectionBuilder()
    .withUrl("/chatHub").withHubProtocol(new msgPack.MessagePackHubProtocol())
    .configureLogging(SignalR.LogLevel.Information)
    .build();

connection.on("writeMessage",
    (message) => {

        var el = document.getElementById("messages");

        var li = document.createElement("li");
        li.appendChild(document.createTextNode(message));

        el.appendChild(li);
    });

connection.start().then(() => { console.log("Connected"); });

