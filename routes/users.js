const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport=require("passport");
const { saveRedirectUrl }=require("../middleware.js");

const userController=require("../Controller/users.js");

router.route("/signUp")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signUp));

router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl,passport.authenticate("local",{ failureRedirect: '/login', failureFlash:true }), userController.logIn
);

router.get("/logout",userController.logOut);

module.exports=router; 