const express = require('express');
const path = require('path')

const {list,detail,create,modify,mostwanted,deleted} = require(path.resolve(__dirname,'../controllers/productsController'))

const {picturesProduct} = require(path.resolve(__dirname,'../controllers/picturesController'))

const router = express.Router();

router.get('/search',list)
router.get('/mostwanted',mostwanted)
router.get('/',list); //aca hace listado y ademas hace la busqueda por category


router.post('/',create)
router.put('/:id',modify)

router.get('/:id',detail)
router.delete('/:id',deleted)

//muestra la lista de pictures de un id
router.get('/:id/pictures',picturesProduct)

module.exports = router;