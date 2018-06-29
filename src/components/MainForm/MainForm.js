import React, { Component } from 'react';
import TitleBar from './TitleBar/TitleBar';
import FormContainer from './FormContainer/FormContainer';
import FormInput from './FormInput/FormInput';
import SubmitButton from './SubmitButton/SubmitButton';

class MainForm extends Component {
  render() {
    return (
      <div>
        <TitleBar title="VandyHacks V Walk-In Form"/>
        <FormContainer>
          <FormInput 
            type="text"
            name="firstName"
            placeholder="John"
            input="First Name"/>
          <FormInput 
            type="text"
            name="lastName"
            placeholder="Smith"
            input="Last Name"/>
          <FormInput 
            type="email"
            name="email"
            placeholder="johnsmith@youremail.com"
            input="Email"/>
          <FormInput 
            type="text"
            name="university"
            placeholder="Vanderbilt University"
            input="University"/>
          <FormInput 
            type="tel"
            name="phone"
            placeholder="123-456-7890"
            input="Phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
          <SubmitButton />
        </FormContainer>
      </div>
    );
  }
}

export default MainForm;
