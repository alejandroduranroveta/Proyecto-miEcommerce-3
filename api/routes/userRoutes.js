const express = require('express');
const router =express.Router();
const userController = require("../controllers/userController")
const isGod = require("../middlewares/isGod");

router.get("/",userController.list);
router.get("/:id",userController.searchById);
router.post("/",isGod,userController.createUser);
router.put("/:id",userController.modifyUser);
router.delete("/:id",userController.delete);

module.exports = router;