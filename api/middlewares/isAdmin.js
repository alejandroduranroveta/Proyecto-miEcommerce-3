const fs = require("fs");
const path = require('path');

function isAdmin(req, res, next) {
  try {
    const dbUsers = fs.readFileSync(path.join(__dirname,'/../data/users.json'),"utf8");
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

    if (usuario.role === "Admin") {
      next();
    } else {
      return res.status(403).json({
        status: "error",
        msg: "No podes acceder sin permisos de administrador",
      });
    }

  } catch (error) {
    return res.status(500).json({
      status: "error",
      error,
    });
  }
}

module.exports = isAdmin;
