const fs = require("fs");
const path = require("path");

function emptyCart(req, res, next) {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({
      status: "error",
      msg: "El ID es obligatorio",
    });
  }

  try {
    const cartDB = fs.readFileSync(
      path.join(__dirname + "/../data/carts.json"),
      "utf8"
    );
    const cart = JSON.parse(cartDB);
    console.log(cart);

    if (cart.user === Number(id)) {
      const newCart = {
        user: id,
        cart: [],
      };
      fs.writeFileSync(
        path.join(__dirname + "/../data/carts.json"),
        JSON.stringify(newCart)
      );
      next();
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "error al leer o escribir en la db",
      error,
    });
  }
}
module.exports = emptyCart;
