import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions'
import Header from './Header';
import Landing from './Landing';
import PageNotFound from './PageNotFound';
import Thanks from './Thanks';

import axios from 'axios';
window.axios = axios;
const DashBoard = () => <div>DashBoard</div>;
const SurveyNew = () => <div>SurveyNew</div>;


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <div className="container">
                        <Switch>
                            <Route path="/" exact component={Landing} />
                            <Route path="/surveys" exact component={DashBoard} />
                            <Route path="/surveys/new" exact component={SurveyNew} />
                            <Route path="/thanks" exact component={Thanks} />
                            <Route component={PageNotFound} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default connect(null, actions)(App);