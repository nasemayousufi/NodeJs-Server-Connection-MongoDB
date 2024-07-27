const express = require('express');
const { isAdmin, isAuthorized } = require('../utils');
const { CreateAllUsers, UserSignIn, UserRegister, GetAllUsers, GetUserByID, UpdateUserByID, DeleteUserByID } = require("../Controllers/userController");

const userRouter = express.Router();

userRouter.get("/seed", CreateAllUsers);
userRouter.post("/signin", UserSignIn);
userRouter.post("/register", UserRegister);
userRouter.get("/allUsers", isAuthorized, isAdmin, GetAllUsers);
userRouter.get("/:id", isAuthorized, isAdmin, GetUserByID);
userRouter.put("/profile/", isAuthorized, UpdateUserByID);
userRouter.delete("/:id", isAuthorized, isAdmin, DeleteUserByID);

module.exports = userRouter;