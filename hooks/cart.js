import React from 'react';
import { useCart } from './CartProvider';

function Cart() {
  const { cart, dispatch } = useCart();

  return (
    <div>
      {cart.map(item => (
        <div key={item.id}>
          {item.name} - {item.price}
          <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
