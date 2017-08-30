var express = require('express');
var router = express.Router();
var controller = require ('../controller/transaction')

router.post('/',controller.addTransaction)
router.get('/',controller.findTransaction)

module.exports = router;
