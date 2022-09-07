import {SET_POS, LOAD_POS, SET_CUSTOMER, SET_PRODUCT} from './type';

export function loadPos(pos) {
  return {
    type: LOAD_POS,
    payload: pos,
  };
}

export function setPos(pos) {
  console.log('pos:', pos);
  return {
    type: SET_POS,
    payload: pos,
  };
}

export function setCustomer(customer) {
  return {
    type: SET_CUSTOMER,
    payload: customer,
  };
}

export function setProduct(product) {
  return {
    type: SET_PRODUCT,
    payload: product,
  };
}
