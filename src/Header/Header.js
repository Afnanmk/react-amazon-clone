import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(basket);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* logo on the left -> img  */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* Search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 Links */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__headerOptionLineOne">
              Hello {user?.email},
            </span>
            <span className="header__headerOptionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__headerOptionLineOne">Returns</span>
            <span className="header__headerOptionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__headerOptionLineOne">Your</span>
            <span className="header__headerOptionLineTwo">Prime</span>
          </div>
        </Link>
        {/* 4th link */} {/* Basket icon with number  */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* Shopping Basket icon */}
            {/* <ShoppingBasketIcon /> */}
            <div className="header__optionBasketIcon">
              <AiOutlineShoppingCart />
            </div>
            {/* Number of Items in a basket */}
            <span className="header__headerOptionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
