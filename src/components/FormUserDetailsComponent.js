import React, { Component } from 'react';
import '../CSS/FormFields.css';

class FormUserDetailsComponent extends Component {

    continue = e => {
        e.preventDefault();
        this.props.handleSubmit();
    }

    render() {

        const {values, handleChange} = this.props;

        return (
            <>
            <form className="form">
                <div id='out'>
                    <div>
                        <label>First Name:<input type="text" className='form-text' placeholder="First Name" value={values.firstName} onChange={handleChange('firstName')} /></label><p style={{color: 'red', fontSize: 12}}>{values.firstNameError}</p>
                    </div>
                    <div>
                        <label className='form-fields'>Last Name:<input type="text" className='form-text' placeholder="Last Name" value={values.LastName} onChange={handleChange('LastName')} /></label><p style={{color: 'red', fontSize: 12}}>{values.LastNameError}</p>
                     </div>
                    <div>
                        <label className='form-fields'>Semester:<input type="text" className='form-text' placeholder="Current Semester" value={values.sem} onChange={handleChange('sem')} /></label><p style={{color: 'red', fontSize: 12}}>{values.semError}</p>
                    </div>
                    <div>
                        <label className='form-fields'>Section:<input type="text" className='form-text' placeholder="Section" value={values.section} onChange={handleChange('section')} /></label><p style={{color: 'red', fontSize: 12}}>{values.sectionError}</p>
                    </div>
                    <div>
                        <label className='form-fields'>Roll Number:<input type="text" className='form-text' placeholder="Class Roll Number" value={values.roll} onChange={handleChange('roll')} /></label><p style={{color: 'red', fontSize: 12}}>{values.rollError}</p>
                    </div>
                    <div>
                        <button className='forward-button' onClick={this.continue}>Continue</button>
                    </div>
                </div>
            </form>
            </>
        )
    }
}

export default FormUserDetailsComponent;
