using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace SwiftKick.SignalRCore.Hubs
{
    public class ChatHub : Hub
    {
        public void BroadcastMessage(string message)
        {
            Clients.All.SendAsync("writeMessage", message);
        }
    }
}
