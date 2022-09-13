const express = require('express');
const {list,detail,create,modify,mostwanted,actionSearch,categoryId,deleted} = require('../controllers/productsController');
const router = express.Router();

router.get('/',list);
router.get('',categoryId)//PROBLM
router.get('/mostwanted',mostwanted)
router.post('/',create)
router.put('/:id',modify)
router.get('/search',actionSearch)
router.get('/:id',detail)
router.delete('/:id',deleted)

module.exports = router;