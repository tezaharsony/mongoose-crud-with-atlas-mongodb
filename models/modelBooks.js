var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://tezaharsony:tezaharsony@cluster0-shard-00-00-gygu7.mongodb.net:27017,cluster0-shard-00-01-gygu7.mongodb.net:27017,cluster0-shard-00-02-gygu7.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

// create a schema
var bookSchema = new Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
});

// the schema is useless so far
// we need to create a model using it
var books = mongoose.model('books', bookSchema);

// make this available to our users in our Node applications
module.exports = books;
