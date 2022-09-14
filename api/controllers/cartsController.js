const fs = require('fs');
const path = require('path');

const cartById = (req, res) => {
    const { id } = req.params;

    try {
        const dataToParse = fs.readFileSync(path.resolve(__dirname, '../data/carts.json'), 'utf-8');
        const data = JSON.parse(dataToParse);

        const cart = data.find(c => c.user === Number(id));

        if (!cart || id == 0) {
            return res.status(404).json({
                msg: "El carrito no existe"
            })
        }

        res.status(200).json({
            products: cart.cart
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Server error'
        })
    }
}

const editCart = (req, res) => {
    const { id } = req.params;

    try {
        const dataToParse = fs.readFileSync(path.resolve(__dirname, '../data/carts.json'), 'utf-8');
        const data = JSON.parse(dataToParse);

        let cart = data.find(c => c.user === Number(id));

        if (!cart || id == 0) {
            return res.status(404).json({
                msg: "El carrito no existe"
            })
        }

        let user = 1;

        cart = {
            user: user,
            cart: req.body
        };

        if (validCart(cart)) {
            fs.writeFileSync(path.resolve(__dirname, '../data/carts.json'),JSON.stringify(cart))
            return res.status(200).json(cart)
        }


        res.status(400).json({
            msg: 'Formato de carts incorrecto'
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Server error'
        })
    }
}

const validCart = cart => {
    cartArray = cart.cart;
    let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json'), 'utf-8'));

    if (!cartArray || cartArray.length < 1) return false;

    let valid = true;
    cartArray.forEach(e => {
        if (!e.product || !productExists(e.product, products) || !e.quantity || e.quantity < 1) {
            valid = false;
            return;
        }
    })

    return valid;
}

const productExists = (p, products) => {
    let _prod = products.find(pr => pr.id == p);
    if (!_prod) console.log('Producto ' + p + ' no existe.');
    return _prod;
}

const removeProductFromCart = productId => {
    const dataToParse = fs.readFileSync(path.resolve(__dirname, '../data/carts.json'), 'utf-8');
    const data = JSON.parse(dataToParse);

    let cart = data.cart.filter(item => item.product != productId);
    
    fs.writeFileSync(path.resolve(__dirname, '../data/carts.json'),JSON.stringify(cart))

}
module.exports = { cartById, editCart,removeProductFromCart };