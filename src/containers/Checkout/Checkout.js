import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from "./ContactData/ContactData";
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-area');
    };

    render() {
        let summary = <Redirect to="/"/>
        if (this.props.ings) {
            const purchasedRedirect  = this.props.purchased ? <Redirect to="/"/> : null;
            summary = (
                <div>
                    <CheckoutSummary ingredients={this.props.ings}
                                     checkoutCancelled={this.checkoutCancelledHandler}
                                     heckoutContinued={this.checkoutContinuedHandler}/>
                    <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
                </div>
            );
        }
        return (
                {summary}
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
};


export default connect(mapStateToProps)(Checkout);
