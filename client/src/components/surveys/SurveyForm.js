import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
    { label: "Survey Title", name: "title" },
    { label: "Subject Line", name: "subject" },
    { label: "Email Body", name: "body" },
    { label: "Recipient list", name: "emails" }
];

class SurveyForm extends Component {
    renderFields() {
        return FIELDS.map(({label, name}) => {
            return (
                <Field 
                    type="text"
                    name={name}
                    label={label}
                    component={SurveyField}
                    key={name}
                />
            )
        })
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                {this.renderFields()}
                <Link to="/surveys" className="red btn-flat white-text">
                    Cancel
                </Link>
                <button type="submit" className="teal btn-flat right white-text">
                    Next
                    <i className="material-icons right">navigate_next</i>
                </button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);