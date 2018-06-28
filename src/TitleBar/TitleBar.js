import React from 'react';

const titlebar = (props) => {
    const style = {
        textAlign: 'center',
        float: 'none'
    }
    return (
        <nav className='navbar'>
            <h1 className='mx-auto navbar-brand' style={style}>{props.title}</h1>
        </nav>
    );
};

export default titlebar;