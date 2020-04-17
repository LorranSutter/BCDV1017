const express = require('express');
const app = express();

app.listen(3000);

const requestTime = (req,res,next) => {
    req.requestTime = Date.now();
    next()
}

app.use(requestTime);

app.get('/greet', (req, res) => {
    console.log('GET received: ' + req.requestTime);
    res.send('Hello World!')
});

app.post('/greet', (req, res) => {
    console.log('POST received: ' + req.requestTime);
    res.send('Hello World!')
});

app.put('/greet', (req, res) => {
    console.log('PUT received: ' + req.requestTime);
    res.send('Hello World!')
});

app.delete('/greet', (req, res) => {
    console.log('DELETE received: ' + req.requestTime);
    res.send('Hello World!')
});