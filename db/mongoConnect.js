//  mongo connect
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    mongoose.set('strictQuery', false);
  await mongoose.connect('mongodb://127.0.0.1:27017/fullstack2023');
  console.log("mongo connect fullstack local")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}