const express = require("express");
const auth = require("../Middleware/auth");
const usersController = require("../controllers/users-controllers");

const router = express.Router();

router.post("/login", usersController.login);

router.get("/getUserData/:id", auth, usersController.getUserData);

module.exports = router;
