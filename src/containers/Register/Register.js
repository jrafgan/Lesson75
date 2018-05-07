import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Alert, Button, Col, ControlLabel, Form, FormControl, FormGroup, HelpBlock, PageHeader} from "react-bootstrap";
import {registerUser} from "../../store/actions/users";

class Register extends Component {
  state = {
    username: '',
    password: ''
  };

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitFormHandler = event => {
    event.preventDefault();

    this.props.registerUser(this.state);
  };

  fieldHasError = fieldName => {
    return this.props.error && this.props.error.errors[fieldName];
  };

  render() {
    return (
      <Fragment>
        <PageHeader>Register new user</PageHeader>
        <Form horizontal onSubmit={this.submitFormHandler}>

          <FormGroup controlId="username" validationState={this.fieldHasError('username') ? 'error': null}>
            <Col componentClass={ControlLabel} sm={2}>
              Username
            </Col>
            <Col sm={10}>
              <FormControl
                type="text" required
                placeholder="Enter username"
                name="username"
                value={this.state.username}
                onChange={this.inputChangeHandler}
              />
              {this.fieldHasError('username') &&
                <HelpBlock>{this.props.error.errors.username.message}</HelpBlock>
              }
            </Col>
          </FormGroup>

          <FormGroup controlId="password">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl
                type="password" required
                placeholder="Enter password"
                name="password"
                value={this.state.password}
                onChange={this.inputChangeHandler}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button
                bsStyle="primary"
                type="submit"
              >Register</Button>
            </Col>
          </FormGroup>
        </Form>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  error: state.users.registerError
});

const mapDispatchToProps = dispatch => ({
  registerUser: userData => dispatch(registerUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);