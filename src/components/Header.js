import { brandLogo } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
const isOnline = useOnlineStatus();
  
  

 
  return (
    <div className="header">
      <Link to={"/"}>
        <div className="logo-container">
          <img className="header-logo" src={brandLogo} />
        </div>
      </Link>

      <div className="search-bar">
        <input type="text" placeholder="Search for restaurants, cusines... " />
      </div>

      <div className="nav-items">
        <ul>
          {isOnline ? (
            <li
              style={{
                color: "green",
                backgroundColor: "white",
                boxShadow: " 0px 0px 28px 2px rgba(0, 0, 0, 0.141)",
              }}
            >
              🟢 Online
            </li>
          ) : (
            <li
              style={{
                color: "red",
                backgroundColor: "white",
                boxShadow: " 0px 0px 28px 2px rgba(0, 0, 0, 0.141)",
              }}
            >
              🛑 Offline
            </li>
          )}
          <li>
             <Link to="/" className="link">Home</Link>
          </li>
           <li>
             <Link to="/about" className="link">About</Link>
           </li>
      <li>
     <Link to="/contact" className="link">Contact</Link>
        </li>   
       <li>
  <Link to="/cart" className="link">Cart</Link>
      </li>

          {isLogin ? (
            <li
              onClick={() => {
                setIsLogin(!isLogin);
              }}
            >
              Logout
            </li>
          ) : (
            <li
              onClick={() => {
                setIsLogin(!isLogin);
              }}
            >
              Login
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};


export default Header;