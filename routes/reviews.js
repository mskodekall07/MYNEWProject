const express=require("express");
const router=express.Router({ mergeParams : true});
const wrapAsync=require("../utils/wrapAsync.js");
const {reviewSchema}=require("../schema.js");
const ExpressError=require("../utils/ExpressError.js");
const Listing=require("../models/listing.js");
const Review=require("../models/review.js")
const { reviewValidate ,isLoggedIn, isReviewAuthor }=require("../middleware.js");

const reviewController=require("../Controller/reviews.js")

//Post Review Route
router.post("/",isLoggedIn,reviewValidate, wrapAsync(reviewController.createReview));

//Delete Review Route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports=router;