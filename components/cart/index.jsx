import CartItem from './cart-item'
import { currencyFormat } from '../../utils/numericFormatters'
import styles from './Cart.module.scss'

export default function Cart({ cartItems, removeItemFromCart }) {
  
  function getCartTotal() {
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return "your cart is empty"; // handle the case when cartItems is undefined
    }

    const totalCost = cartItems.reduce((prev, curr) => {
      const itemPrice = Number(curr.price);
      let itemDiscount = Number(curr.discount);

      // console.log(itemPrice);
      // console.log(itemDiscount)
    
      // Check if the discount is provided as a percentage and convert it to a decimal if needed
      if (itemDiscount >= 1) {
        itemDiscount /= 100; // Convert percentage to decimal
      } else {
        itemDiscount = 0;
      }
      // console.log(itemDiscount);
    
      // Check for valid numerical values
      if (isNaN(itemPrice) || isNaN(itemDiscount)) {
        return prev;
      }
    
      const discountedPrice = itemPrice * (1 - itemDiscount);
    
      return prev + discountedPrice;
    }, 0);

    return currencyFormat(totalCost)
  }

  function renderEmptyCart() {
    return (
      <div className={styles.emptyCart}>You have no items in your cart</div>
    )
  }

  function renderCart() {
    return (
      <ul className={styles.cart}>
        {cartItems.map((product, i) => (
          <li className={styles.cartItem} key={i}>
            <CartItem product={product} removeItemFromCart={removeItemFromCart} />
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className={styles.container}>
      {cartItems && cartItems.length > 0 ? renderCart() : renderEmptyCart()}
      {cartItems && cartItems.length > 0 ? (<div className={styles.total}>Total: {getCartTotal()}</div>) : null}
    </div >
  )
}
