import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions'
import Header from './Header';
import Landing from './Landing';

const DashBoard = () => <div>DashBoard</div>;
const SurveyNew = () => <div>SurveyNew</div>;


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" exact component={Landing} />
                        <Route path="/surveys" exact component={DashBoard} />
                        <Route path="/surveys/new" exact component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);