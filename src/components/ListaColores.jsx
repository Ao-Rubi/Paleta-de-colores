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
                    props.arregloColores.map((item, index)=>{
                        return <Col key={index} className='mb-2' xs={6} md={3} lg={2}> <ItemColor colorCargado={item} ></ItemColor> </Col> 
                    })
                }
            </Row>
        </Container>
    );
};
// borrarColor={props.borrarColor}
export default ListaColores;