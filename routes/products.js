const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// INDEX - show all items
router.get("/", function(req, res){
  // ....
});

// CREATE - add new item
router.post("/", function(req,res) {
  // .... 
});

// NEW - displays form to make new item
router.get("/new", function(req, res){
  // ....
});

// SHOW - shows more info about one item
router.get("/:id", function(req, res) {
  // ....
});

// EDIT - edit item
router.get("/:id/edit", function(req, res){
  // ....
});

// UPDATE - logic to update item in database
router.put("/:id", function(req, res){
  // ....
});

// DESTROY
router.delete("/:id", function(req, res){
  // ....
});

module.exports = router;