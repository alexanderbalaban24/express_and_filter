require('dotenv').config();

const connectDB = require('./db/connect');
const Product = require('./models/product');

const jsonProducts = require('./products.json');


const UserDB = process.env.DB_USERNAME || 'root';
const PasswordDB = process.env.DB_PASSWORD || 'qwerty12345';
const NameDB = process.env.DB_NAME || 'store_db';
const HostDB = process.env.DB_HOST || 'mongodb://localhost:27017/';

const start = async () => {
  try {
    await connectDB(HostDB, UserDB, PasswordDB, NameDB);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log('Success!!!');
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

start();
