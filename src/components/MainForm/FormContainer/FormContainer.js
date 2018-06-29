import React from 'react';

const FormContainer = (props) => {
    const width = {
        width: '50%',
    }
    return (
        <div className='container center-block' style={width}>
            <div className='row center-block'>
                <div className='col'>
                    <form action="/add" 
                        method="post"
                        className='justify-content-center'>
                        {props.children}
                    </form>
                </div>
            </div>
        </div>
    )
};

export default FormContainer;