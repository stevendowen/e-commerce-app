import { createStore } from 'redux';

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PRODUCT':
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
}

const initialState = {
  products: [],
};

const store = createStore(reducer, initialState);

export default store;
