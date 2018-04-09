import React, {Component} from 'react';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";

class ProductForm extends Component {
  state = {
    title: '',
    price: '',
    description: ''
  };

  submitFormHandler = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
  };

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <Form horizontal onSubmit={this.submitFormHandler}>
        <FormGroup controlId="productTitle">
          <Col componentClass={ControlLabel} sm={2}>
            Title
          </Col>
          <Col sm={10}>
            <FormControl
              type="text" required
              placeholder="Enter product title"
              name="title"
              value={this.state.title}
              onChange={this.inputChangeHandler}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="productPrice">
          <Col componentClass={ControlLabel} sm={2}>
            Price
          </Col>
          <Col sm={10}>
            <FormControl
              type="number" min="0" required
              placeholder="Enter product price"
              name="price"
              value={this.state.price}
              onChange={this.inputChangeHandler}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="productDescription">
          <Col componentClass={ControlLabel} sm={2}>
            Description
          </Col>
          <Col sm={10}>
            <FormControl
              componentClass="textarea"
              placeholder="Enter description"
              name="description"
              value={this.state.description}
              onChange={this.inputChangeHandler}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button bsStyle="primary" type="submit">Save</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default ProductForm;
