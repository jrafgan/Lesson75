import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {PageHeader} from "react-bootstrap";

import ProductForm from "../../components/ProductForm/ProductForm";
import {createProduct} from "../../store/actions/products";

class NewProduct extends Component {
  createProduct = productData => {
    this.props.onProductCreated(productData).then(() => {
      this.props.history.push('/');
    });
  };

  render() {
    return (
      <Fragment>
        <PageHeader>New product</PageHeader>
        <ProductForm onSubmit={this.createProduct} />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onProductCreated: productData => {
      return dispatch(createProduct(productData))
    }
  }
};

export default connect(null, mapDispatchToProps)(NewProduct);