import React, { Component } from 'react';
import FormUserDetailsComponent from './FormUserDetailsComponent';
import FormPersonalDetailsComponent from './FormPersonalDetailsComponent';
import ConfirmationComponent from './ConfirmationComponent';

const regxE = (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
const regxS = (/^[A-E]$/i);
const regxP = (/^[0-9]{10}$/i);
const regxR = (/^[0-9]{1,2}$/i);
const regxSe = (/^[1-8]$/i);

class UserFormComponent extends Component {

    state = {
        step: 1,
        firstName: '',
        LastName: '',
        roll: '',
        section: '',
        sem: '',
        email: '',
        phone: '',
        city: '',
        firstNameError: '',
        LastNameError: '',
        rollError: '',
        sectionError: '',
        semError: '',
        emailError: '',
        phoneError: '',
        cityError: ''
    }

//proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step+1
        });
    }    

//go back to previous step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step-1
        });
    }
//to validate the form
    validate = () => {
        let firstNameError = '';
        let LastNameError = '';
        let rollError = '';
        let sectionError = '';
        let semError = '';
        let emailError = '';
        let phoneError = '';
        let cityError = '';
        //Regular expression check------------------------------------
        let emailResult = regxE.test(this.state.email);
        let phoneResult = regxP.test(this.state.phone);
        let sectionResult = regxS.test(this.state.section);
        let rollResult = regxR.test(this.state.roll);
        let semResult = regxSe.test(this.state.sem);
        //-------------------------------------------------------------

        if(!this.state.firstName){
            firstNameError = 'this field cannot be blank';
        }
        if(!this.state.LastName){
            LastNameError = 'this field cannot be blank';
        }
        if(emailResult === false){
            emailError='invalid email';
        }
        if(phoneResult === false){
            phoneError='invalid mobile number';
        }
        if(sectionResult === false){
            sectionError = 'section should contain alphabets only';
        }
        if(semResult === false){
            semError = 'invalid semester';
        }
        if(rollResult === false){
            rollError = 'roll no. should contain numbers only';
        }
        if(!this.state.city){
            cityError='this field is empty';
        }
        //-------------------------------------------------------------
        if(this.state.step === 1){
            if(firstNameError || LastNameError || sectionError || semError || rollError)
            {
            this.setState({firstNameError, LastNameError, semError, sectionError, rollError});
            return false;
            }
        }
        if(this.state.step === 2){
            if(emailError || cityError || phoneError )
            {
            this.setState({emailError, phoneError, cityError});
            return false;
            }
        }
        

        return true;
    }

    //handle fields change
    handleChange = input => e => {

        this.setState({
            [input]: e.target.value   
        });

    }

    handleSubmit = () => {
        
        const isValid = this.validate();
        console.log(isValid);
        if(isValid){
            this.nextStep();
        }
        console.log(this.state.step);
    }


    render() {

        const {step} = this.state;
        const{firstName, LastName, roll, section, sem, email, phone, city, firstNameError, LastNameError, rollError, sectionError, semError, emailError, phoneError, cityError, enabled} = this.state;
        const values = {firstName, LastName, roll, section, sem, email, phone, city, firstNameError, LastNameError, rollError, sectionError, semError, emailError, phoneError, cityError, enabled};

        switch(step){
            case 1:
                return(
                    <FormUserDetailsComponent 
                        handleSubmit={this.handleSubmit}    //call handlesubmit which call nextStep
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return(
                    <FormPersonalDetailsComponent
                        handleSubmit={this.handleSubmit}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return(
                    <ConfirmationComponent 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
        }

        return (
            <div>
                <h1>Success!</h1>
            </div>
        )
    }
}

export default UserFormComponent;
