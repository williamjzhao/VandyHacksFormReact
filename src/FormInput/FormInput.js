import React from 'react';

const forminput = (props) => {
    return (
        <div className='form-group'>
            <label htmlFor={props.name}>Enter your {props.input}</label>
            <input type={props.type} 
                name={props.name} 
                id={props.name} 
                placeholder={props.placeholder}
                pattern={props.pattern} 
                className='form-control'
                required/>
        </div>
    )
};

export default forminput;