import React from 'react';
import './SubmitButton.css';

const submitbutton = (props) => {
    return (
        <div className='text-center center-block'>
            <input className='btn btn-outline-secondary' type="submit" value="Submit" /> 
        </div>
    );
};

export default submitbutton;