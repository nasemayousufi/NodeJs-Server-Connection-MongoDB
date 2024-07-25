const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils');
const User = require('../Models/userModel');
const data = require("../data");

const CreateAllUsers = async (req, res) => {
  try {
    const createdUsers = await User.insertMany(data.users);
    res.status(201).send({ createdUsers });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const UserSignIn = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
   if(user) {
    if(bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
            _id: user.id,
            name: user.name,
            email: user.email,
            displayName: user.displayName,
            displayRoleType: user.displayRoleType,
            displayImage: user.displayImage,
            greeting: user.greeting,
            isAdmin: user.isAdmin,
            token: generateToken(user)
        });
        return;
     }
  }
  res.status(401).send({ message: 'Invalid email or password' });
};

const UserRegister = async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    displayName: req.body.displayName,
    displayRoleType: req.body.displayRoleType,
    displayImage: req.body.displayImage,
    greeting: req.body.greeting,
    password: bcrypt.hashSync(req.body.password, 10),
  });

  const createdUser = await user.save();
  res.send({
    _id: createdUser.id,
    name: createdUser.name,
    email: createdUser.email,
    displayName: createdUser.displayName,
    displayRoleType: createdUser.displayRoleType,
    displayImage: createdUser.displayImage,
    greeting: createdUser.greeting,
    isAdmin: createdUser.isAdmin,
    token: generateToken(createdUser)
  });
};

const GetAllUsers = async (req, res) => {
   const users = await User.find({});
    res.send(users); 
};

const GetUserByID = async (req, res) => {
  const user = await User.findById(req.params.id);
    if(user) {
        res.send(user);
    } else {
        res.status(404).send({ message: 'User Not Found' });
    }
};

const UpdateUserByID = async (req, res) => {
  const user = await User.findById(req.user._id);
  if(user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.displayName = req.body.displayName || user.displayName;
    user.displayRoleType = req.body.displayRoleType || user.displayRoleType;
    user.displayImage = req.body.displayImage || user.displayImage;
    user.greeting = req.body.greeting || user.greeting;
    if(req.body.password) {
      user.password = bcrypt.hashSync(req.body.password, 10);
    }
    const updatedUser = await user.save();
    res.send({
      _id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      displayName: updatedUser.displayName,
      displayRoleType: updatedUser.displayRoleType,
      displayImage: updatedUser.displayImage,
      greeting: updatedUser.greeting,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser)
    });
  }   
};

const DeleteUserByID = async (req, res) => {
            
};

module.exports = {
    CreateAllUsers,
    UserSignIn,
    UserRegister,
    GetAllUsers,
    GetUserByID,
    UpdateUserByID,
    DeleteUserByID
};
