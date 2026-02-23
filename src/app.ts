import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {
  console.log("Client connected");
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.on("close", (code, reason) => {
    console.log(code);
    console.log("Client disconnected");
  })

  ws.send('Hello from server');
});

console.log("Server running on port 3000")