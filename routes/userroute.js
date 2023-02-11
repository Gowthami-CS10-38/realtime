const router = require('express').Router()
const {createUser, fetchUser} = require("../controllers/usercontroller");
router.route("/createUSer").post(createUser)
router.route("/fetchUser/:id").get(fetchUser)

module.exports = router;