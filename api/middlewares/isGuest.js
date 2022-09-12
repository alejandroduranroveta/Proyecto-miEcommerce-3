const fs = require("fs");

function isGuest(req,res,next) {
  try {
    const dbUsers = fs.readFileSync(
      "/Users/federicodefortuny/Desktop/Sprint-1/Proyecto-miEcommerce-3/api/data/users.json","utf8");
    const listaUsuarios = JSON.parse(dbUsers);

    let id = -1;
    if (req.params.id) {
      id = Number(req.params.id);
    }
    if (req.body.id) {
      id = Number(req.body.id);
    }
    if (id === -1) {
      return res.status(400).json({
        msg: "el id es obligatorio",
      });
    }

    const usuario = listaUsuarios.filter((user) => user.id === id);

    if (usuario.role === 'Guest') {
      next();

    }else{
      return res.status(403).json({
        status: 'error',
        msg: 'Debes tener un permiso mayor al de "guest"'
      });
    }

  } catch (error) {
    return res.status(500).json({
      status: "error",
      error,
    });

  }

  module.exports = isGuest;
}
