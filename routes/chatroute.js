const router = require('express').Router()
const { createchat , fetchChat} = require("../controllers/createchatcontroller");
router.route("/createchat").post(createchat);
router.route("/fetchChat").get(fetchChat)
module.exports = router;

