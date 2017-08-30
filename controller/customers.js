const customersModel = require('../models/modelCustomers')


var addCustomers = function (req, res){
  // console.log("gooooooooo");
    var customers = new customersModel({
    name : req.body.name,
    memberid : req.body.memberid,
    address : req.body.address,
    zipcode : req.body.zipcode,
    phone : req.body.phone
  })
  customers.save(function(err,customers){
    if(!err){
      res.send(customers)
    } else {
      res.send(err)
    }
  })
}

var findcustomersById = function (req, res) {
  customersModel.find({ _id : req.params.id }, function(err, customers){
    if (!err) {
      res.send(customers)
    } else {
      res.send(err)
    }
  });
}

var findcustomer = function (req,res){
  customersModel.find({}, function(err,customers){
    if(!err) {
      res.send(customers)
    } else {
      res.send(err)
    }
  });
}


var deletecustomers = function (req, res){
  customersModel.remove({_id: req.params.id}, function (err){
    if (!err) {
      res.send("data deleted")
    } else {
      res.send(err)
    }
  })
}

var updatecustomers = function (req, res){
  customersModel.findByIdAndUpdate({
    _id : req.params.id
  },{
    name : req.body.name,
    memberid : req.body.memberid,
    address : req.body.address,
    zipcode : req.body.zipcode,
    phone : req.body.phone
  })
  .then(customers => {
    res.send(customers)
  })
  .catch(err =>{
    res.send(err)
  })
}


module.exports = {
  addCustomers,
  findcustomersById,
  findcustomer,
  deletecustomers,
  updatecustomers
};
