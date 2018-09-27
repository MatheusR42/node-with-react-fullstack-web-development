import React from 'react';
import { connect } from "react-redux";
import formFields from './formFields';

const SurveyReview = ({ onCancel, formValues }) => {
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
                className="yellow dark-3 btn-flat"
                onClick={onCancel}
            >
                Back
            </button>
        </div>
    )
}

function mapStateToProp(state) {
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProp)(SurveyReview);