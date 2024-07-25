const express = require('express');
const { isAdmin, isAuthorized } = require('../utils');
const { CreateAllUsers, UserSignIn, UserRegister, GetAllUsers, GetUserByID, UpdateUserByID, DeleteUserByID } = require("../Controllers/userController");

const userRouter = express.Router();

userRouter.get("/seed", isAdmin, CreateAllUsers);
userRouter.post("/signin", UserSignIn);
userRouter.post("/register", UserRegister);
userRouter.get("/allUsers", isAdmin, GetAllUsers);
userRouter.get("/:id", isAdmin, GetUserByID);
userRouter.put("/profile/", isAuthorized, UpdateUserByID);
userRouter.delete("/:id", isAdmin, DeleteUserByID);

module.exports = userRouter;