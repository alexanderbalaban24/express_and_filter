require('dotenv').config();
require('express-async-errors');
const connectDB = require('./db/connect');
const express = require('express');
const products = require('./routes/products');

const app = express();


const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');


app.use(express.json());
app.use('/api/v1/products', products);

app.get('/', (req, res) => {
  res.send('<h1>Store API!!</h1><a href="/api/v1/products">products route</a>');
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT || 3002;
const UserDB = process.env.DB_USERNAME || 'root';
const PasswordDB = process.env.DB_PASSWORD || 'qwerty12345';
const NameDB = process.env.DB_NAME || 'store_db';
const HostDB = process.env.DB_HOST || 'mongodb://localhost:27017/';

const start = async () => {
  try {
    await connectDB(HostDB, UserDB, PasswordDB, NameDB);
    app.listen(PORT, console.log(`Server running on port : ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start();
