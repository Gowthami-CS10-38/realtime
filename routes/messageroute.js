const router = require('express').Router()
const {sendMessage, fetchMessage}= require('../controllers/messagecontroller')
router.route("/sendMessage").post(sendMessage)
router.route("/fetchMessage").get(fetchMessage)
module.exports= router