export const initialState = {
  basket: [],
  user: null
};

export const getBasketTotal = basket =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      // logic for adding item to the cart
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case "REMOVE_FROM_CART":
      // logic for removing item from the cart

      const index = state.basket.findIndex(
        basketItem => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        // item exists in the cart,remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id}) as its not`);
      }

      return {
        ...state,
        basket: newBasket
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
}
export default reducer;
