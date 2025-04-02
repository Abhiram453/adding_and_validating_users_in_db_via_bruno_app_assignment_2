const express = require('express');
const { resolve } = require('path');
const connection = require('./connection/connection');
const userRoute = require('./route/userRoute');
connection()  
const app = express();
const port = 3010;
app.use(express.json());

app.use(express.static('static'));
app.use('/api/user', userRoute);
app.use('/api/auth', require('./route/authRoute'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`connected to http://localhost:${port}`);
});
