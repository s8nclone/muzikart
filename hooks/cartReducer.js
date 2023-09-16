export const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Add the item to the cart
        // You can define the cart structure as an array of items
        const updatedCart = [...state, action.payload];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      case 'REMOVE_FROM_CART':
        // Remove the item from the cart based on an identifier (e.g., product ID)
        const filteredCart = state.filter(item => item.id !== action.payload);
        localStorage.setItem('cart', JSON.stringify(filteredCart));
        return filteredCart;
      default:
        return state;
    }
};
  