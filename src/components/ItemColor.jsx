import React from 'react';
import Card from 'react-bootstrap/Card';
import CajaColor from './CajaColor';


const ItemColor = (props) => {
    let color = props.colorCargado.color

    return (
        <Card>
            <Card.Header>
                <Card.Title>{props.colorCargado.nombre}</Card.Title>
            </Card.Header>

            <Card.Body>
                <CajaColor color={color}></CajaColor>
            </Card.Body>
        </Card>
    );
};

export default ItemColor;