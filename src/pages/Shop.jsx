import { useEffect, useState } from "react"
import './Shop.css'
function Shop() {
  const [product, setProduct]=useState([]);
  useEffect(()=>{
    const fetchData= async ()=>{
      try{const response=await fetch('https://fakestoreapi.com/products')
      const data=await response.json();
      setProduct(data);} catch(error){console.log(`Error: ${error}`)}
    };
    fetchData();
  },[]);
  return (
    <div className="product-grid">
      {
        product.map((item)=>(
          <div key={item.id} className="product">
            <div className="image"><img src={item.image} alt={item.title} width='170px' height='170px'/></div>
            <div className="text">
              <div>{item.title}</div>
              <div>${item.price}</div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Shop