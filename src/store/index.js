import { createStore } from 'redux';

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PRODUCT':
      return {
        ...state,
        products: action.products,
      };
    case 'SEARCH': {
      return {
        ...state,
        search: action.value,
      };
    }
    case 'ADD_PRODUCT': {
      const idx = state.cart.findIndex(p => {
        return p.id === action.product.id;
      });
      const newCart = [...state.cart];
      if (idx === -1) {
        action.product.qty = 1;
        newCart.push(action.product);
        return {
          ...state,
          cart: newCart,
        };
      } else {
        newCart[idx].qty += 1;
        return {
          ...state,
          cart: newCart,
        };
      }
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
      const newCart = [...state.cart];
      const idx = state.cart.findIndex(p => {
        return p.id === action.id;
      });
      newCart[idx].qty += action.amount;
      return {
        ...state,
        cart: newCart,
      };
    }
    case 'DECREMENT': {
      const newCart = [...state.cart];
      const idx = state.cart.findIndex(p => {
        return p.id === action.id;
      });
      if (state.cart[idx].qty > 0) {
        newCart[idx].qty -= action.amount;
      }
      return {
        ...state,
        cart: newCart,
      };
    }
    default:
      return state;
  }
}

const initialState = {
  products: [],
  search: '',
  cart: [],
  list: [],
};

const store = createStore(reducer, initialState);

export default store;
