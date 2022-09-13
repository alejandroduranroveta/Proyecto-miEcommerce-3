const express = require('express');
const {list,detail,create,modify,deleted} = require('../controllers/productsController');
const router = express.Router();

router.get('/',list);
router.get('/:id',detail)
router.post('/',create)
router.put('/:id',modify)
//query strings
//router.get('/search?',actionSearch)
//router.get('/mostwanted',mostwanted)
//router.get('/products?category=ID',categoryId)
router.delete('/:id',deleted)

module.exports = router;