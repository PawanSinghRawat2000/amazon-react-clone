import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "../../Context/StateProvider";
import { auth } from "../../firebase";
const Header = () => {

  const [{basket,user},dispatch]=useStateValue();

  const handlesAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }


  return (
    <div className="header">
      <Link to="/">
      <img
        className="header-logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      </Link>
      

      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <SearchIcon className="header-searchIcon"/>
      </div>

      <div className="header-nav">
      <Link to={!user && '/login'} style={{textDecoration:"none"}}>
        <div onClick={handlesAuthentication}
        className="header-options">
          <span className="header-optionLineOne">
            Hello {!user?'Guest':(user?.email).split("@",1)}
          </span>
          
          <span className="header-optionLineTwo">
            {user?'Sign Out':'Sign In'}
          </span>
          
          
        </div>
        </Link>
        <Link to={'/orders'}>
          <div className="header-options">
          <span className="header-optionLineOne">
              Returns
            </span>
            <span className="header-optionLineTwo">
              & Orders
            </span>
          </div>
        </Link>
        
        <div className="header-options">
        <span className="header-optionLineOne">
            Your
          </span>
          <span className="header-optionLineTwo">
            Prime
          </span>
        </div>
        
        <Link to="/checkout">
        <div className="header-optionBasket">
          <ShoppingBasket/>
          <span className="header-optionLineTwo header-basketCount">
            {basket?.length}
          </span>
        </div>
        </Link>
        
        
      </div>
    </div>
  );
};

export default Header;
