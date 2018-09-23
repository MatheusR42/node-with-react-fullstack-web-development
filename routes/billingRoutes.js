const keys = require('../config/keys');
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id //id created on front-end by react-stripe-checkout
        });

        req.user.credits += 5; //using passport we always have acess to user
        const user = await req.user.save(); //save in database
        
        res.send(user);
    });
}