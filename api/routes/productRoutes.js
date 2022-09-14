const express = require('express');
const path = require('path')
const {list,detail,create,modify,mostwanted,deleted} = require(path.resolve(__dirname,'../controllers/productsController'))
const {picturesProduct} = require(path.resolve(__dirname,'../controllers/picturesController'))
const router = express.Router();
const isGod = require("../middlewares/isGod");
const isGuest = require("../middlewares/isGuest");
const isAdmin = require("../middlewares/isAdmin");

router.get('/search',isGuest,list)
router.get('/mostwanted',isGuest,mostwanted)
router.get('/',isGuest,list); //aca hace listado y ademas hace la busqueda por categor
router.post('/',isGod,create)
router.put('/:id',isAdmin,modify)
router.get('/:id',isAdmin,detail)
router.delete('/:id',isGod,deleted)
router.get('/:id/pictures',isAdmin,picturesProduct)//muestra la lista de pictures de un id


module.exports = router;