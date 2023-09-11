import Cart from '@/components/cart'
import React from 'react'

function CartPage({ cartItems, removeItemFromCart }) {
  return (
    <Cart cartItems={cartItems} removeItemFromCart={removeItemFromCart}/>
  )
}

export default CartPage