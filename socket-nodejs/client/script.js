const socket = io();

socket.emit('message', 'Nama saya');

socket.on('notification', (data) => {
  console.log(`New notification: ${data}`);
});
