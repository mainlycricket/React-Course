import { createContext, useContext, useEffect, useReducer } from 'react';

import reducer from './reducer';
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './action';

const AppContext = createContext();

const initialState = {
  loading: true,
  cart: [],
  cost: 0,
  count: 0,
};

const url = 'https://www.course-api.com/react-useReducer-cart-project';

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function fetchData() {
    dispatch({ type: LOADING });
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: DISPLAY_ITEMS, payload: { data } });
  }

  useEffect(() => {
    fetchData();
  }, [])

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increaseAmount = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  const decreaseAmount = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
