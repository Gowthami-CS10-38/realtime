const User = require("../models/Usermodel");
const createUser = async (req, res) => {
  const { name, profilePic } = req.body;
  if (!name) {
    res.status(400).json("enter all fields");
  }
  try {
    await User.create({ name: name });

    return res.status(200).json(`user created ${name}`);
  } catch (error) {
    console.log(error.Message);
  }
};

const fetchUser = async (req, res) => {
  try {
    console.log(req.params);
    const user = await User.findById(req.params.id).then((v) => res.json(v.name));
  } catch (error) {
    res.status(400).json(error.Message);
  }
};
module.exports = { fetchUser, createUser };
