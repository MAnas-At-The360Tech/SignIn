const express = require('express');
const mongoose = require("mongoose");
const { EmailConfirm } = require('./EmailConfirm');
const { Login } = require('./Login');
const app = express()
const { SingIn } = require('./SingIn');

const port = 3001
const DB_URL = "mongodb://127.0.0.1:27017/The_360_tech"

// Database connection
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// api control domains
let allowDomain = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
}
app.use(allowDomain);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('DB connected...')
})

app.use(express.json())
app.get('/', (req, res) => {
  res.send('App is working')
})

app.post('/Login', Login)
app.post('/SingIn', SingIn)
app.post('/confirm', EmailConfirm)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})