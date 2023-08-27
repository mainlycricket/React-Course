import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './action';

export default function reducer(state, action) {
  if (action.type == LOADING) {
    return { ...state, loading: true };
  }

  if (action.type == DISPLAY_ITEMS) {
    const cartItems = new Map(
      action.payload.data.map((item) => [item.id, item])
    );
    const { cost, count } = calcUtils(cartItems);
    return { ...state, loading: false, cost, count, cart: cartItems };
  }

  if (action.type == CLEAR_CART) {
    return { ...state, cart: new Map() };
  }

  if (action.type == REMOVE) {
    const newCart = new Map(state.cart);

    const itemId = action.payload.id;
    const item = newCart.get(itemId);

    const updatedCount = state.count - item.amount;
    const updatedCost = state.cost - Number(item.price) * item.amount;

    newCart.delete(itemId);
    return { ...state, cart: newCart, count: updatedCount, cost: updatedCost };
  }

  if (action.type == INCREASE) {
    const newCart = new Map(state.cart);

    const itemId = action.payload.id;
    const item = newCart.get(itemId);

    const updatedCount = state.count + 1;
    const updatedCost = state.cost + Number(item.price);

    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(itemId, newItem);

    return { ...state, cart: newCart, count: updatedCount, cost: updatedCost };
  }

  if (action.type == DECREASE) {
    const newCart = new Map(state.cart);

    const itemId = action.payload.id;
    const item = newCart.get(itemId);

    const updatedCount = state.count - 1;
    const updatedCost = state.cost - Number(item.price);

    if (item.amount === 1) {
      newCart.delete(itemId);
      return {
        ...state,
        cart: newCart,
        count: updatedCount,
        cost: updatedCost,
      };
    }

    const newItem = { ...item, amount: item.amount - 1 };
    newCart.set(itemId, newItem);

    return { ...state, cart: newCart, count: updatedCount, cost: updatedCost };
  }

  throw new Error(`No match action type: ${action.type}`);
}

function calcUtils(cartItems) {
  let count = 0;
  let cost = 0;
  for (let { amount, price } of cartItems.values()) {
    count += amount;
    cost += amount * price;
  }
  return { count, cost };
}
