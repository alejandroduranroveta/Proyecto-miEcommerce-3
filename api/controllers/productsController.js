const db = require('../data/products.js');
const productsController = {
    'list': (req, res) => {
       try {
          res.status(500).json(db);
       } catch (error) {
          console.log(error);
          res.status(500).json({
             msg: 'Server Error'
          });
       }
 
    }}