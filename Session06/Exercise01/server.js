const express = require('express');
const app = express();

app.listen(3000);

app.get('/html', (req, res) => {
  res.send('<html><head></head><body><h1>Hello World!</h1></body></html>')
});

app.get('/json', (req, res) => {
  res.json({ firstName: 'John', lastName: 'Smith' })
});

app.get('/toronto*team', (req, res) => {
  const teamName = req.originalUrl.slice(1).replace('toronto', '').replace('team', '')
  res.send(`<html><head></head><body><h1>Go Toronto ${teamName}!</h1></body></html>`)
});