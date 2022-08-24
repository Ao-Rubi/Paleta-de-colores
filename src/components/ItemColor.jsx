import React from 'react';
import Card from 'react-bootstrap/Card';
import CajaColor from './CajaColor';
import { Button } from 'react-bootstrap';

const ItemColor = (props) => {
    let color = props.colorCargado.color;

    return (
        <Card>
            <Card.Header>
                <Card.Title>{props.colorCargado.nombre}</Card.Title>
            </Card.Header>

            <Card.Body>
                <CajaColor color={color}></CajaColor>
            </Card.Body>

            <Card.Footer className='d-flex justify-content-end'>
                <Button variant="warning"  >Borrar</Button>
            </Card.Footer>
        </Card>
    );
};
// onClick={props.borrarColor(props.colorCargado)}

export default ItemColor;