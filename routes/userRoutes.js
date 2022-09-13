const express = require('express');
const router =express.Router();
const userController = require("../api/controllers/userController")

router.get("/",userController.list);
router.get("/:id",userController.searchById);
router.post("/",userController.createUser);
router.put("/:id",userController.modifyUser);
router.delete("/:id",userController.delete);

module.exports = router;