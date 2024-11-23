const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { getAllUsers, createUser, deleteUser } = require("../controllers/Users.controller");

//get all users
router.get("/", getAllUsers);

router.post("/",createUser);

router.delete("/:id",deleteUser);


module.exports = router;
