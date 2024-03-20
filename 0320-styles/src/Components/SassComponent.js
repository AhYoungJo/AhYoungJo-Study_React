import React from 'react';
import '../Styles/SassComponent.scss'

const SassComponent = () => {
    return (
        <>
        <div className='container'>
            <h1>Sass Styling</h1>
            <div className='box red'></div>
            <div className='box orange'></div>
            <div className='box yellowgreen'></div>
        </div>
        <button className='btn'>Button</button>
        <button className='btn-primary'>Button Primary</button>
        </>
    );
};

export default SassComponent;