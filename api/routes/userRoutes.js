const express = require('express');
const router =express.Router();
const userController = require("../controllers/userController")
const isGod = require("../middlewares/isGod");
const isGuest = require("../middlewares/isGuest");
const isAdmin = require("../middlewares/isAdmin");

router.get("/",isAdmin,userController.list);
router.get("/:id",isAdmin,userController.searchById);
router.post("/",isGod,userController.createUser);
router.put("/:id",isGod,userController.modifyUser);
router.delete("/:id",isGod,userController.delete);

module.exports = router;