import React, { Component } from 'react';
import '../CSS/FormFields.css';

class FormPersonalDetailsComponent extends Component {

    continue = e => {
        e.preventDefault();
        this.props.handleSubmit();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        const {values, handleChange} = this.props;

        return (
            <>
            <form className="form">
                <div id='out'>
                    <div>
                        <label>Email:<input type="email" className='form-text' placeholder="example@gmail.com" value={values.email} onChange={handleChange('email')} /></label><p style={{color: 'red', fontSize: 12}}>{values.emailError}</p>
                    </div>
                    <div>
                        <label className='form-fields'>Contact:<input type="text" className='form-text' placeholder="number" value={values.phone} onChange={handleChange('phone')} /></label><p style={{color: 'red', fontSize: 12}}>{values.phoneError}</p>
                    </div>
                    <div>
                        <label className='form-fields'>City:<input type="text" className='form-text' placeholder="Current City" value={values.city} onChange={handleChange('city')} /></label><p style={{color: 'red', fontSize: 12}}>{values.cityError}</p>
                    </div>
                    <div>
                        <button className='back-button' onClick={this.back}>Back</button>
                        <button className='forward-button' onClick={this.continue}>Continue</button>
                    </div>
                </div>
            </form>
            </>
        )
    }
}

export default FormPersonalDetailsComponent;
