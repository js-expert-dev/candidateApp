import React, { Component } from 'react';
import {
  Container,
  Card,
  Col,
  Form,
  Row,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import { toast } from 'react-toastify';
// import styles from './Signin.module.css';
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    this.setState({ validated: true });
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    delete data.validated;

    if (data.email === 'm.aleem9090@gmail.com') {
      if (data.password === '12345678') {
        this.props.history.push('/Home');
      }
      toast.error('Invalid Password');
    } else {
      toast.error('Invalid Username');
    }
    // this.props.login(data);
  };

  render() {
    const { validated, email, password } = this.state;

    return (
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="align-self-center">
            <h1 className="text-center font-weight-bold mt-5">App Name</h1>
            <Card style={{ backgroundColor: 'black' }}>
              <small
                className="text-center mt-5 mb-3"
                style={{ color: 'white' }}
              >
                Sign In
              </small>
              <Form
                className="mx-5"
                noValidate
                validated={validated}
                onSubmit={this.handleSubmit}
              >
                <Form.Group>
                  <InputGroup>
                    <FormControl
                      value={email}
                      onChange={this.handleChange}
                      name="email"
                      placeholder="Email"
                      aria-label="Username or Email"
                      aria-describedby="username-addon"
                      required
                    />
                    <InputGroup.Append>
                      <InputGroup.Text id="username-addon">
                        <i className="fas fa-user" />
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>
                <Form.Group>
                  <InputGroup>
                    <FormControl
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="password-addon"
                      required
                    />
                    <InputGroup.Append>
                      <InputGroup.Text id="password-addon">
                        <i className="fas fa-lock" />
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-5">
                  <Button variant="outline-primary" block type="submit">
                    Login
                  </Button>
                  <small
                    className="text-info btn p-0"
                    onClick={() => {
                      this.props.history.push('/forget');
                    }}
                  >
                    ForgotPassword?
                  </small>
                </Form.Group>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
