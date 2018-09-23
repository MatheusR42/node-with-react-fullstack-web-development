import React, { Component } from "react";
import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {
        const { auth } = this.props;

        switch(this.props.auth) {
            case null:
                return null
            case false:
                return (
                    <li>
                        <a href="/auth/google">Login with Google</a>
                    </li>
                )
            default:
                return (
                    <li>
                        <a href="/api/logout">Logout</a>
                    </li>
                )
        }
        
    }
    render(){
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="left brand-logo">Emaily</a>
                    <ul id="nav-mobile" className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Header);