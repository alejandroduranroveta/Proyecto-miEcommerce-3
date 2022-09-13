const express = require('express');
const fs = require('fs');
const {cartById, editCart} = require('../controllers/cartsController')


const router = express.Router();

router.get('/:id', cartById);
router.put('/:id', editCart);



module.exports = router;