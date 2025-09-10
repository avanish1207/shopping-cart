import { useEffect, useState } from "react"
import { useCart } from "../context/CartContext";
import './Shop.css'
function Shop() {
  const [product, setProduct]=useState([]);
  const [quantities, setQuantities]=useState({});

  const {addToCart}=useCart();
  useEffect(()=>{
    const fetchData= async ()=>{
      try{
        const response=await fetch('https://fakestoreapi.com/products')
        const data=await response.json();
        setProduct(data);

        const initialQuantities={};
        data.forEach(item=>initialQuantities[item.id]=1);
        setQuantities(initialQuantities);
      } catch(error){console.log(`Error: ${error}`)}
    };
    fetchData();
  },[]);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      setQuantities(prev => ({
        ...prev,
        [productId]: newQuantity
      }));
    }
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    addToCart(product, quantity);
    alert(`Added ${quantity} ${product.title} to cart!`);
  };

  return (
    <div className="shop-container">
      <h1>Our Products</h1>
      <div className="products-grid">
        {
          product.map((item)=>(
            <div key={item.id} className="product-card">
              <div className="image"><img src={item.image} alt={item.title} width='170px' height='170px'/></div>
              <div className="text">
                <div>{item.title}</div>
                <div>${item.price}</div>
              </div>
              <div className="cart-settings">
                <div className="quantity-controls">
                  <button onClick={()=>handleQuantityChange(item.id, quantities[item.id] - 1)} disabled={quantities[item.id<=1]}>-</button>
                  <input
                    type="number"
                    min="1"
                    value={quantities[item.id] || 1}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  />
                  <button
                    onClick={() => handleQuantityChange(item.id, quantities[item.id] + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  Add {quantities[item.id]} to Cart
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Shop