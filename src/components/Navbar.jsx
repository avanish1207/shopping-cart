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
                <li><Link to="cart">Cart</Link></li>
                <li><Link to="home">Home</Link></li>
                <li><Link to="shop">Shop</Link></li>
            </ul>
        </nav>
        </div>
    )
}

export default Navbar