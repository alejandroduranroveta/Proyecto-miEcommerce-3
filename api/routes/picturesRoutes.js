const express = require('express');
const path = require('path');

const router = express.Router();
const {detail,create,modify,deleted,picturesProduct} = require(path.resolve(__dirname,'../controllers/picturesController'))

//router.get('/',list);
//trae el producto que tenga la imagen con el id que le pasen hay que hacerlo por body y por request

router.get('/',picturesProduct) 


router.get('/:id',detail)
router.post('/',create) 
router.put('/:id',modify)
router.delete('/:id',deleted)



module.exports = router;