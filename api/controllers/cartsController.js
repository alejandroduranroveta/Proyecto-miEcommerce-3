const fs = require('fs');
const path = require('path');

const cartById = (req,res) =>{
    const { id } = req.params;

    try {
       const dataToParse = fs.readFileSync(path.resolve(__dirname, '../data/carts.json'), 'utf-8');
       const data = JSON.parse(dataToParse);

       const cart = data.find(c => c.user === Number(id));
 
       if (!cart) {
          return res.status(404).json({
            msg : "El carrito no existe"
          })
       }
 
       res.status(200).json({
            products: cart.cart.map(c => c.product)
       })
    } catch (error) {
        console.log(error);
       res.status(500).json({
        msg : 'Server error'
       })
    }
}

const editCart = (req,res) => {
    console.log('EditCart')
}

module.exports = {cartById, editCart};