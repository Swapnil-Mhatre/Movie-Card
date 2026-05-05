import { Link } from "react-router-dom";
import "../assets/css/Navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/Movie-Card">Movie App</Link>
      </div>
      <div className="menu">
        <Link to="/Movie-Card">Home</Link>
        <Link to="/favourite">Favourite</Link>
      </div>
    </div>
  );
};

export default Navbar;
