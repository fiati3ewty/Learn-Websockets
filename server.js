// const WebSocket = require('ws');
// const wss = new WebSocket.Server({ port: 4000 });
// // สร้าง websockets server ที่ port 4000
// wss.on('connection', function connection(ws) {
//   // สร้าง connection
//   console.log('Srv run');
//   ws.on('message', function incoming(message) {
//     // รอรับ data อะไรก็ตาม ที่มาจาก client แบบตลอดเวลา
//     console.log('received: %s', message);
//   });
//   ws.on('close', function close() {
//     // จะทำงานเมื่อปิด Connection ในตัวอย่างคือ ปิด Browser
//     console.log('disconnected');
//   });
//   ws.send('init message to client');
//   // ส่ง data ไปที่ client เชื่อมกับ websocket server นี้
// });

// ------------

const WebSocket = require('ws');
const port = 4000;

const wws = new WebSocket.Server({ port: port }, () => {
  console.log(`Server running on port: ${port}`);
});

wws.on('connection', (ws) => {
  console.log('new client is Connected');

  ws.on('message', (data) => {
    console.log(`Client has send us: ${data}`);
    ws.send('Hi client');
  });

  ws.on('close', () => {
    console.log('client has Disconnected');
  });

  ws.send('init message to client');
});
