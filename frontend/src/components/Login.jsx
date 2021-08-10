import React, { Component } from 'react';
import BarraNavegacion from './BarraNavegacion';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import '../assets/css/login.css';

class Login extends Component {

    constructor() {
        super();
     
    }

    render() {
        return (
            <>	
            	<BarraNavegacion></BarraNavegacion>
            	<div id="login-body-form">
	            	<div className="mt-4" id="login-index-form" >
	            		<div id="titulo-login" className="d-flex justify-content-center mb-4">
	            			<h2>Ingresar</h2>
	            		</div>
	            		
	            		<div id="sing-in-google" className="d-flex justify-content-center">
					    	<a href={`http://backend/sign-in/auth/google`} class="btn btn-danger"><span class="fa fa-google"></span> SignIn with Google</a>
					    </div>
					    <div class="row">
							<div class="col-md-12 mt-1 d-flex justify-content-center">ó</div>
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

						<Row>
			        		<Col md={12}>
						  		<Form.Group className="mb-3" controlId="formBasicPassword">
						    		<Form.Label>Contraseña</Form.Label>
						    		<Form.Control type="password" placeholder="********" />
						  		</Form.Group>
						  	</Col>
						</Row>
						  <div className="d-flex justify-content-center">
							  <Button variant="warning" className="m-2">Volver</Button>
							  <Button variant="primary" type="submit" className="m-2">Submit</Button>
						  </div>
						</Form>
						<div className="d-flex justify-content-center mb-3 mt-3">
							<a href="/reset-password">¿Has olvidado tu contraseña?</a>
						</div>
					</div>
				</div>
        	</>
        );
    }
}


export default Login;