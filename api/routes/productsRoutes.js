const express = require('express');
const { list} = require('../controllers/productsController');
const router = express.Router();

router.get('/products', list);