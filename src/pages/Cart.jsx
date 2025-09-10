import { useCart } from '../context/CartContext';
import './Cart.css';

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
  } = useCart();

  // Handle quantity change for individual items
  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  // If cart is empty
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added any items to your cart yet.</p>
          <a href="/shop" className="continue-shopping-btn">
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Your Shopping Cart</h1>
        <p>You have {getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''} in your cart</p>
      </div>

      <div className="cart-content">
        {/* Cart Items */}
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.title} />
              </div>
              
              <div className="item-details">
                <h3>{item.title}</h3>
                <p className="item-category">{item.category}</p>
                <p className="item-price">${item.price}</p>
              </div>

              <div className="quantity-controls">
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <input 
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                  className="quantity-input"
                />
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              <div className="item-total">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>

              <button 
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
                title="Remove from cart"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="cart-summary">
          <div className="summary-card">
            <h3>Order Summary</h3>
            
            <div className="summary-line">
              <span>Subtotal ({getTotalItems()} items):</span>
              <span>${getTotalPrice()}</span>
            </div>
            
            <div className="summary-line">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            
            <div className="summary-line">
              <span>Tax:</span>
              <span>${(parseFloat(getTotalPrice()) * 0.08).toFixed(2)}</span>
            </div>
            
            <hr />
            
            <div className="summary-line total">
              <span>Total:</span>
              <span>${(parseFloat(getTotalPrice()) * 1.08).toFixed(2)}</span>
            </div>

            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      <div className="cart-actions">
        <a href="/shop" className="continue-shopping-link">
          ← Continue Shopping
        </a>
      </div>
    </div>
  );
}

export default Cart;
