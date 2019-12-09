const User = require('../models/User');
const Review = require('../models/Expense');
const errorMsg = { error: "Cannot access this review." }

module.exports = (req, res, next) => {
    if(!req.user) {
        return res.status(422).send({
            error: 'Please login first'
        })
    } else {
        Review.findById(req.params.id, (err, foundReview) => {
            if (err) {
                return errorMsg;
            } else {
                (foundReview.author.id.equals(req.user.id)) ? foundReview : errorMsg;
            }
        });
    }
}