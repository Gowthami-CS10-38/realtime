const Convo = require("../models/chatmodel");
const createchat = async (req, res) => {
  try {
    const { name } = req.body;
    const chat = await Convo.create({ name: name });
    return res.status(200).json(`Convo created with name ${name}`);
  } catch (error) {
    console.log(error.message);
  }
};

const fetchChat = async (req, res) => {
  try {
    await Convo.findOne({ name: req.body.name });
    return res.status(200).json(`convo fetched`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { createchat, fetchChat };
