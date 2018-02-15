import React from 'react';
import {Grid,Row,Col,FormControl,Button} from 'react-bootstrap';

const LoginForm = () => {
    return(
        <Grid>
            <Row>
                <Col xs={12} md={12} lg={12} sm={12}>
                    <h1 className="headingLogin"> Login Form </h1>
                </Col>
                <Grid>
                    <Row>
                        <Col md={6} mdOffset={3} xs={10} xsOffset={1}>
                        <FormControl
                            className="form_Login"
                            type="email"
                            placeholder="Email"
                            name="email"
                         /> 
                        </Col>
                    </Row>                   
                </Grid>

                <Grid>
                    <Row>
                        <Col md={6} mdOffset={3} xs={10} xsOffset={1}>
                        <FormControl
                            className="form_Login"
                            type="password"
                            placeholder="password"
                            name="password"
                         /> 
                        </Col>
                    </Row>                   
                </Grid>

                <Grid>
                    <Row>
                        <Col md={6} mdOffset={5} xs={10} xsOffset={4} sm={6} sm={0}>
                        <Button
                            className="form_Login"
                            bsStyle="success"                            
                         > Submit
                         </Button>
                        </Col>
                    </Row>                   
                </Grid>
            </Row>
        </Grid>
    );
}

export default LoginForm;


