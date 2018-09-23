import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
                name="Emaily"
                description="$5 for 5 email credits"
                amout={500}
                token={token => console.log(token)} //callback function
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add credits
                </button>
            </StripeCheckout>
        )
    }
}

export default Payments;
