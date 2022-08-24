import React from 'react';

const CajaColor = (props) => {

    let color = props.color;

    return (
        <div className='m-0' style={{backgroundColor:color, width:"120px", height:"100px"}}></div>
    );
};

export default CajaColor;