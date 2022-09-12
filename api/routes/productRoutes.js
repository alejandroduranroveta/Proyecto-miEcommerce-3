const express = require('express');
const {list,detail,create} = require('../controllers/productsController');
const router = express.Router();

router.get('/',list);
router.get('/:id',detail)
router.post('/',create)

module.exports = router;