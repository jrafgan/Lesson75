import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Button, Image, PageHeader, Panel} from "react-bootstrap";
import {fetchProducts} from "../../store/actions/products";
import {Link} from "react-router-dom";

class Products extends Component {
  componentDidMount() {
    this.props.onFetchProducts();
  }

  render() {
    return (
      <Fragment>
        <PageHeader>
          Products
          <Link to="/products/new">
            <Button bsStyle="primary" className="pull-right">
              Add product
            </Button>
          </Link>
        </PageHeader>

        {this.props.products.map(product => (
          <Panel key={product.id}>
            <Panel.Body>
              { product.image &&
                <Image
                  style={{width: '100px', marginRight: '10px'}}
                  src={'http://localhost:8000/uploads/' + product.image}
                  thumbnail
                />
              }
              <Link to={'/products/' + product.id}>
                {product.title}
              </Link>
              <strong style={{marginLeft: '10px'}}>
                {product.price} KGS
              </strong>
            </Panel.Body>
          </Panel>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProducts: () => dispatch(fetchProducts())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);