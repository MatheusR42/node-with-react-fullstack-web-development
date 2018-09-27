import React from 'react';
import { connect } from "react-redux";
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyReview = ({ onCancel, formValues, submitSurvey }) => {
    const reviewFields  = formFields.map(field => {
        return (
            <div key={field.name}>
                <label>{field.label}</label>
                <div>
                    {formValues[field.name]}
                </div>
            </div>
        );
    })

    return (
        <div>
            <h5>Please confirm you entires</h5>
            {reviewFields}
            <button 
                className="white-text yellow darken-3 btn-flat"
                onClick={onCancel}
            >
                Back
            </button>

            <button 
                className="green right white-text btn-flat"
                onClick={() => submitSurvey(formValues)}
            >
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
}

function mapStateToProp(state) {
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProp, actions)(SurveyReview);