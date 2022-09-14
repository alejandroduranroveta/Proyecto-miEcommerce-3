const fs = require("fs");

function isGod(req, res, next) {
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

    if (usuario.role === 'God') {
      next();
    } else {
      return res.status(403).json({
        status: "error",
        msg: "No puedes acceder sin permisos 'God'.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "error",
      error,
    });
  }
}

module.exports = isGod;
