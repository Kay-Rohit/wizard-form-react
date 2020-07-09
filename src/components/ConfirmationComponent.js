import React, { Component } from 'react';
import '../CSS/Confirm.css';

class ConfirmationComponent extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        const {values} = this.props;
        return (
            <div className="restaurant-card">
            <div className="restaurant-details">
                <div className="info-row">
                    <div className="field-name">Name:</div>
                    <div className="field-value">{values.firstName} {values.LastName}</div>
                </div>
                <div className="info-row">
                    <div className="field-name">Roll Number:</div>
                    <div className="field-value">{values.roll}</div>
                </div>
                <div className="info-row">
                    <div className="field-name">Section:</div>
                    <div className="field-value">{values.section}</div>
                </div>
                <div className="info-row">
                    <div className="field-name">sem:</div>
                    <div className="field-value">{values.sem}</div>
                </div>
                <div className="info-row">
                    <div className="field-name">Email:</div>
                    <div className="field-value">{values.email}</div>
                </div>
                <div className="info-row">
                    <div className="field-name">Contact:</div>
                    <div className="field-value">{values.phone}</div>
                </div>
                <div className="info-row">
                    <div className="field-name">City:</div>
                    <div className="field-value">{values.city}</div>
                </div>
            </div>
            <div className="button">
                <button className='back-button' onClick={this.back}>Back</button>
                <button className='forward-button' onClick={this.continue}>Confirm</button>
            </div>
        </div>
        )
    }
}

export default ConfirmationComponent
