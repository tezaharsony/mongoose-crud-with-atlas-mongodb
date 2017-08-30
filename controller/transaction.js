const transactionModel = require('../models/modelTransaction')

var addTransaction = function (req, res){
  // console.log("gooooooooo");
    var transaction = new transactionModel({
    memberid : req.body.memberid,
    days : req.body.days,
    out_date : new Date(),
    due_date : new Date(),
    in_date : new Date(),
    booklist : req.body.booklist
  })
  transaction.save(function(err,transaction){
    if(!err){
      res.send(transaction)
    } else {
      res.send(err)
    }
  })
}

var findTransaction = function (req,res){
  transactionModel.find()
  .populate({path:'memberid', select:'name memberid'})
  .populate({path:'booklist', select:'id title'})
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  addTransaction,
  findTransaction
};
