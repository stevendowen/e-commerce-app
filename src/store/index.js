import { createStore } from 'redux';

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PRODUCT':
      return {
        ...state,
        products: action.products,
      };
    case 'ADD_PRODUCT': {
      const newCart = [...state.cart];
      newCart.push(action.product);
      return {
        ...state,
        cart: newCart,
      };
    }
    case 'ADD_WISH': {
      const newWish = [...state.cart];
      newWish.push(action.product);
      return {
        ...state,
        list: newWish,
      };
    }
    default:
      return state;
  }
}

const initialState = {
  products: [],
  cart: [],
  list: [],
};

const store = createStore(reducer, initialState);

export default store;
