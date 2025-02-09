const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { getAllUsers, createUser, deleteUser } = require("../controllers/Users.controller");

//get all users
/**
 @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns all users
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get("/", getAllUsers);

router.post("/",createUser);

router.delete("/:id",deleteUser);


module.exports = router;
