import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

const Header = () => <div>Header</div>;
const DashBoard = () => <div>DashBoard</div>;
const SurveyNew = () => <div>SurveyNew</div>;
const Landing = () => <div>Landing</div>;

const App = () => {
    return (
        <div>
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

export default App;