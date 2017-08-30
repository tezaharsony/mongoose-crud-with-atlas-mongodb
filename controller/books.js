const bookModel = require('../models/modelBooks')


var addBook = function (req, res){
  // console.log("gooooooooo");
    var book = new bookModel({
    isbn : req.body.isbn,
    title : req.body.title,
    author : req.body.author,
    category : req.body.category,
    stock : req.body.stock
  })
  // console.log(book);
  book.save(function(err,book){
    console.log(err);
    console.log(book);
    if(!err){
      res.send(book)
    } else {
      res.send(err)
    }
  })
}

var findbookById = function (req, res) {
  bookModel.find({ _id : req.params.id }, function(err, book){
    if (!err) {
      res.send(book)
    } else {
      res.send(err)
    }
  });
}

var findbook = function (req,res){
  bookModel.find({}, function(err,book){
    if(!err) {
      res.send(book)
    } else {
      res.send(err)
    }
  });
}


var deletebook = function (req, res){
  bookModel.remove({_id: req.params.id}, function (err){
    if (!err) {
      res.send("data deleted")
    } else {
      res.send(err)
    }
  })
}

var updatebook = function (req, res){
  bookModel.findByIdAndUpdate({
    _id : req.params.id
  },{
    isbn : req.body.isbn,
    title : req.body.title,
    author : req.body.author,
    category : req.body.category,
    stock : req.body.stock
  })
  .then(book => {
    res.send(book)
  })
  .catch(err =>{
    res.send(err)
  })
}


module.exports = {
  addBook,
  findbookById,
  findbook,
  deletebook,
  updatebook
};
