const express = require('express');
const fs = require('fs');
const {cartById, editCart} = require('../api/controllers/cartsController')


const router = express.Router();

router.get('/:id', cartById);
router.put('/:id', editCart);



module.exports = router;