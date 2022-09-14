const express = require('express');
const {list,detail,create,modify,mostwanted,deleted} = require('../controllers/productsController');
const router = express.Router();
const isGod = require("../middlewares/isGod");
const isGuest = require("../middlewares/isGuest");
const isAdmin = require("../middlewares/isAdmin");

router.get('/search',isGuest,list)
router.get('/mostwanted',isGuest,mostwanted)
router.get('/',isGuest,list); //aca hace listado y ademas hace la busqueda por category


router.post('/',isGod,create)
router.put('/:id',isAdmin,modify)

router.get('/:id',isAdmin,detail)
router.delete('/:id',isGod,deleted)

module.exports = router;