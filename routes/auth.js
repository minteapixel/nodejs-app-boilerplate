const express = require('express');
const router = express.Router();
const passport = require("passport");
const user = require("../models/user");
const Expense = reqiure('../models/Expense');
const isLoggedIn = require('../middleware/requireLogin');

// show register form
router.get("/register", function(req, res){
  res.render("register", {page: 'register'}); 
});

//handle sign up logic
router.post("/register", function(req, res){
   var newUser = new User({
           username: req.body.username, 
           firstName: req.body.firstName, 
           lastName: req.body.lastName, 
           avatar: req.body.avatar
       });

   User.register(newUser, req.body.password, function(err, user){
       if(err){
           console.log(err);
           return res.render("register", {error: err.message});
       }
       passport.authenticate("local")(req, res, function(){
         req.flash("success", "Welcome to YelpCamp, " + user.username);
         res.redirect("/campgrounds"); 
       });
   });
});

//show login form
router.get("/login", function(req, res){
  res.render("login", {page: 'login'}); 
});

//handling login logic
router.post("/login", passport.authenticate("local", 
   {
       successRedirect: "/campgrounds",
       failureRedirect: "/login"
   }), function(req, res){
});

// logout route
router.get("/logout", function(req, res){
  req.logout();
  req.flash("success", "Logged you out!");
  res.redirect("/campgrounds");
});




modules.exports = router;