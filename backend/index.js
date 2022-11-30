const express = require('express');
const mongoose = require("mongoose");
const app = express()
const {SingIn} = require('./SingIn');

const port = 3001
const DB_URL = "mongodb://127.0.0.1:27017/The_360_tech"

// Database connection
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('DB connected...')
})

app.use(express.json())
app.get('/', (req, res) => {
  res.send('App is working')
})

app.post('/SingIn', SingIn)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})