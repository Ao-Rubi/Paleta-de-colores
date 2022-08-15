import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListaColores from './ListaColores';

const Formulario = () => {
    let colorLocalStorage = JSON.parse(localStorage.getItem("listaColores")) || [];

    const [arregloColores, setArregloColores] = useState(colorLocalStorage)
    const [color, setColor] = useState();
    const [nombre, setNombre] = useState("");

    useEffect( ()=>{
        localStorage.setItem("listaColores", JSON.stringify(arregloColores));
    },[arregloColores]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setArregloColores([...arregloColores, {color, nombre}])
        console.log(arregloColores)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Card>
                        <Card.Header>Administrar Color</Card.Header>
                        <Card.Body className='d-flex'>
                            <Form.Control className='me-3' type="color" defaultValue={"#000000"} onChange={(e)=>{setColor(e.target.value)}}></Form.Control>
                            
                            <Form.Control type='text' placeholder='ingrese nombre' onChange={(e)=>{setNombre(e.target.value)}}></Form.Control>
    
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary" type='submit'>Enviar</Button>
                        </Card.Footer>
                    </Card>
                </Form.Group>
            </Form>

            <ListaColores arregloColores={arregloColores}></ListaColores>
        </div>
    );
};

export default Formulario;