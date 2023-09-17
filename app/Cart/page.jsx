import Cart from '@/components/cart'
import React from 'react'

function CartPage({ cartItems, removeItemFromCart }) {
  return (
    <div>
      <h2 style={{marginTop: '5rem', textAlign: 'center'}}>Your Cart Items:</h2>
      <Cart cartItems={cartItems} removeItemFromCart={removeItemFromCart}/>
    </div>
  )
}

export default CartPage