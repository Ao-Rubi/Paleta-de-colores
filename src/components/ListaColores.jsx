import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemColor from './ItemColor';

const ListaColores = (props) => {
    return (
        <div>
            <ListGroup>
                {
                    props.arregloColores.map((item, position)=>{return <ItemColor key={position} colorCargado={item}></ItemColor> })
                }
            </ListGroup>
        </div>
    );
};

export default ListaColores;