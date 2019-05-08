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
      const newWish = [...state.list];
      newWish.push(action.product);
      return {
        ...state,
        list: newWish,
      };
    }
    case 'REMOVE_PRODUCT': {
      return {
        ...state,
        cart: [
          ...state.cart.slice(0, action.index),
          ...state.cart.slice(action.index + 1, state.cart.length),
        ],
      };
    }
    case 'REMOVE_WISH': {
      return {
        ...state,
        list: [
          ...state.list.slice(0, action.index),
          ...state.list.slice(action.index + 1, state.list.length),
        ],
      };
    }
    case 'INCREMENT': {
      return {
        ...state,
        counter: state.counter + action.amount,
      };
    }
    case 'DECREMENT': {
      return {
        ...state,
        counter: state.counter - action.amount,
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
  counter: 1,
};

const store = createStore(reducer, initialState);

export default store;
