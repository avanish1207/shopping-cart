import { Link, useNavigate } from "react-router"
import './Navbar.css'
import { useCart } from "../context/CartContext";

function Navbar() {
    const navigate=useNavigate();

    const goHome=()=>{
        navigate('/');
    }

    const {cartItems}=useCart();
    console.log(cartItems);

    return (
        <div className="navbar">
        <h2 onClick={goHome}>ShopEasy</h2>
        <nav>
            <ul>
                <li><Link to="shop" className="nav-link">Shop</Link></li>
                <li><Link to="cart" className="nav-link">Cart</Link></li>
            </ul>
        </nav>
        </div>
    )
}

export default Navbar