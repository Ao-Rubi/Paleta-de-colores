import React from 'react';

const CajaColor = (props) => {

    let color = props.color;

    return (
        <div style={{background:{color}, width:"50px", height:"50px"}}></div>
    );
};

export default CajaColor;