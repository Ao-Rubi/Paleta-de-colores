import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import CajaColor from './CajaColor';


const ItemColor = (props) => {
    let color = props.colorCargado.color

    return (
        <div>
            <ListGroup.Item>
                <Card>
                    <Card.Body>
                        <Card.Title>{props.colorCargado.nombre}</Card.Title>
                        <CajaColor color={color}></CajaColor>
                    </Card.Body>
                </Card>
            </ListGroup.Item>
        </div>
    );
};

export default ItemColor;