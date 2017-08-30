var express = require('express');
var router = express.Router();
var controller = require ('../controller/customers')

router.post('/',controller.addCustomers)
router.get('/:id',controller.findcustomersById)
router.get('/',controller.findcustomer)
router.delete('/:id',controller.deletecustomers)
router.put('/:id',controller.updatecustomers)
module.exports = router;
