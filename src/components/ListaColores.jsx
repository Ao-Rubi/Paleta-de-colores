import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemColor from './ItemColor';

const ListaColores = (props) => {
    return (
        <Container>
            <Row>
                {
                    props.arregloColores.map((item, position)=>{return <Col className='mb-2' xs={6} md={3} lg={2}> <ItemColor key={position} colorCargado={item}></ItemColor> </Col> })
                }
            </Row>
        </Container>
    );
};

export default ListaColores;