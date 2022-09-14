const fs = require("fs");
const path = require("path");
const userController = {
	list: (req, res) => {
		try {
			const bdUser = fs.readFileSync(
				path.join(__dirname, "/../data/users.json"),
				"utf-8"
			);
			res.status(200).json(JSON.parse(bdUser));
		} catch (error) {
			console.log(error);
			res.status(500).json({
				msg: "Error Database",
			});
		}
	},
	searchById: (req, res) => {
		try {
			const bdUser = fs.readFileSync(
				path.join(__dirname, "/../data/users.json"),
				"utf-8"
			);
			let users = JSON.parse(bdUser);
			let user = users.find((e) => e.id === Number(req.params.id));
			console.log(user);
			user
				? res.status(200).json(user)
				: res.status(404).json({ msg: "Not fund user" });
		} catch (error) {
			console.log(error);
			res.status(500).json({ msg: "Error server" });
		}
	},
	createUser: (req, res) => {
		try {
			let {
				id,
				email = "exaple@gmail.com",
				username = "pepito",
				password = "123",
				firtsname = "Anonymous",
				lastname = "Anonymous",
				profilepic = "www.img.com",
				role
			} = req.body;
			let newUser = {
				id,
				email,
				username,
				password,
				firtsname,
				lastname,
				profilepic,
				role
			};
			const bdUser = fs.readFileSync(
				path.join(__dirname, "/../data/users.json"),
				"utf-8"
			);
			let users = JSON.parse(bdUser);
			users.push(newUser);
			fs.writeFileSync(
				path.join(__dirname, "/../data/users.json"),
				JSON.stringify(users)
			);
			console.log(req.method);
			req.method === "POST"
				? res.status(201).json(newUser)
				: res
						.status(400)
						.json({ msg: "You need use POST method for create user" });
		} catch (error) {
			console.log(error);
			res.status(500).json({ msg: "Error server" });
		}
	},
	modifyUser: (req, res) => {
		try {
			let id = req.params.id;
			if (id) {
				let bdUser = fs.readFileSync(
					path.join(__dirname, "/../data/users.json"),
					"utf-8"
				);
				let users = JSON.parse(bdUser);
				let usuariAmodificar = req.body;
				let usersAux = users.find((e) => e.id === Number(id));
				if (usersAux) {
					usersAux = users.filter((e) => e.id !== Number(id));
				} else {
					return res.status(404);
				}
				usersAux.push(usuariAmodificar);
				bdUser = fs.writeFileSync(
					path.join(__dirname, "/../data/users.json"),
					JSON.stringify(usersAux)
				);
				res.status(200).json({ usuariAmodificar });
			} else {
				return res.status(400);
			}
		} catch (error) {
			console.log(error);
			res.status(500);
		}
	},
	delete: (req, res) => {
		try {
			let id = req.body.id;
			if (id) {
				let bdUser = fs.readFileSync(
					path.join(__dirname, "/../data/users.json"),
					"utf-8"
				);
				let users = JSON.parse(bdUser);
				let userDelete = users.find((e) => e.id === Number(id));
				if (userDelete) {
					let usersAux = users.filter((e) => e.id !== Number(id));
					bdUser = fs.writeFileSync(
						path.join(__dirname, "/../data/users.json"),
						JSON.stringify(usersAux)
					);
					res.status(200).json(userDelete);
				} else {
					return res.status(404);
				}
			}
		} catch (error) {
			console.log(error);
			res.status(500);
		}
	},
};

module.exports = userController;
