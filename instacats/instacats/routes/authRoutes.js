const express= require("express");
const router = express.Router();

const AuthControlller = require("../controllers/AuthController");

router.post("/register", AuthControlller.registerpost);

module.exports = router;