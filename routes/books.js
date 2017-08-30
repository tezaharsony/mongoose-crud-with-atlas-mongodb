var express = require('express');
var router = express.Router();
var controller = require ('../controller/books')

router.post('/',controller.addBook)
router.get('/:id',controller.findbookById)
router.get('/',controller.findbook)
router.delete('/:id',controller.deletebook)
router.put('/:id',controller.updatebook)
module.exports = router;
