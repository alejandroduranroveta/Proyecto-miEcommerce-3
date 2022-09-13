const express = require('express');
const {list,detail,create,modify,mostwanted,deleted} = require('../controllers/productsController');
const router = express.Router();

router.get('/search',list)
router.get('/mostwanted',mostwanted)
router.get('/',list); //aca hace listado y ademas hace la busqueda por category


router.post('/',create)
router.put('/:id',modify)

router.get('/:id',detail)
router.delete('/:id',deleted)

module.exports = router;