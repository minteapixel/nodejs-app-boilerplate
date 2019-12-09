// user profile page
// should show the products they reviewed

const express = require("express");
const router = express.Router();
const User = require("../models/user");

// user profile page
router.get("/users/:id", function(req, res){
  // ...
});

module.exports = router;