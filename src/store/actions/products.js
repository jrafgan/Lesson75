import axios from '../../axios-api';
import {CREATE_PRODUCT_SUCCESS, FETCH_PRODUCTS_SUCCESS} from "./actionTypes";

export const fetchProductsSuccess = products => {
  return {type: FETCH_PRODUCTS_SUCCESS, products};
};

export const fetchProducts = () => {
  return dispatch => {
    axios.get('/products').then(
      response => dispatch(fetchProductsSuccess(response.data))
    );
  }
};

export const createProductSuccess = () => {
  return {type: CREATE_PRODUCT_SUCCESS};
};

export const createProduct = productData => {
  return (dispatch, getState) => {
    const headers = {
      'Token': getState().users.user.token
    };

    return axios.post('/products', productData, {headers}).then(
      response => dispatch(createProductSuccess())
    );
  };
};