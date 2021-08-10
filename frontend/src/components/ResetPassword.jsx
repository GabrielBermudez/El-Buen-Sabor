 import React from 'react'
 import BarraNavegacion from './BarraNavegacion';
 import { Button, Container, Form, Row, Col } from 'react-bootstrap';
 import '../assets/css/login.css';

 const ResetPassword = () => {
 	return (
 		<>  
            <BarraNavegacion></BarraNavegacion>  
            <div id="login-body-form">
                <div className="mt-4" id="login-index-form" >
                    <div id="titulo-login" className="d-flex justify-content-center mb-4">
                        <h2>Recuperar Contraseña</h2>
                    </div>
         			<Form className="m-3">
                        <Row>
                            <Col md={12}>
                                  <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="ejemplo@gmail.com" />
                                    <Form.Text className="text-muted">
                                          We'll never share your email with anyone else.
                                    </Form.Text>
                                  </Form.Group>
                              </Col>
                        </Row>
                        <div className="d-flex justify-content-center">
                            <Button variant="warning" className="m-2">Volver</Button>
                            <Button variant="primary" type="submit" className="m-2">Recuperar</Button>
                        </div>
                    </Form>
                </div>
            </div>
 		</>
 	)
 }
 
 export default ResetPassword