import React from 'react';

const CajaColor = (props) => {

    let color = props.color
    console.log(color);

    return (
        <div style={{backgroundColor:color, width:"100px", height:"100px"}}></div>
    );
};

export default CajaColor;