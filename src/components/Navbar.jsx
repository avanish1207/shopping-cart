import { Link } from "react-router"
import './Navbar.css'

function Navbar() {

  return (
    <div className="navbar">
      <h2>Shopping Website</h2>
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