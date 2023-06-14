const express = require('express');
const app = express();

const port = 3030;

// Define Route
app.get('/', (req, res) => {
  console.log('client connected');

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Access-Control-Allow-Origin', '*');

  const intervalId = setInterval(() => {
    const date = new Date().toLocaleString();

    const messageOne = `message: Bissmillah Lulus Program Integratif\n\n`;
    const messageTwo = `buat aku: Semangat pasti bisa!\n\n`;

    res.write('date: ' + date + '\n');
    res.write(messageOne);
    res.write(messageTwo);
  }, 10000);

  res.on('close', () => {
    console.log('client closed connection');
    clearInterval(intervalId);
    res.end();
  });
});

app.listen(port, () => {
  console.log('server is running');
});
