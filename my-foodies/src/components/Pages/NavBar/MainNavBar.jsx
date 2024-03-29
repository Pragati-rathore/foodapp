import NavBar from "./NavBar";
import "./navBar.css";
import { IoFastFoodSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import LoginPage from "../AuthPages/LoginPage";
import { useState, useEffect } from "react";
import OfferNavBar from "./offerNavBar";
import { BiSolidPaste } from "react-icons/bi";


const MainNavBar = ({ currentPath ,searchbarshown}) => {
  const [showLogin, setShowLogin] = useState(false);
  const [appName, setAppName] = useState(false);
  const [homeItem , setHomeItem ] = useState("HOME")
  const [navItems, setNavItems] = useState(true);
  const [address , setAddress] = useState(true)

  const handleLoginPopUp = () => {
    setShowLogin(true);
  };
  const handleLoginPopUpClose = () => {
    setShowLogin(false);
  };
 

  // const defultItems = () => {
  //   return (
  //     <>
       
  //     </>
  //   );
  // };

  
  useEffect(() => {
    console.log(currentPath )
    if (currentPath === "/offer") {
      setAppName(true);
      setNavItems(false);
    }
    if (currentPath === '/card') {
      setHomeItem("SECURE CHECKOUT")
      setAddress(false)
    }
    if(currentPath === '/help'){
      setHomeItem("HELP")
      setAddress(false)

    }
    if(currentPath==="/profile"){
      setHomeItem("MY ACCOUNT")
      setAddress(false)
    }
    // else {
    //   setNavItems(defultItems);
    // }
  }, [currentPath]);


  return (
    <>
      <div className="flex-nav-main">
        <div className="flex-inner-nav">
          <Link to="/">
          <div className="logo">
            <IoFastFoodSharp className="logo-icon" />
            {appName ? <p className="companyname">FOODIE's</p> : ""}
          </div></Link>
         
          <div className="address-box">
            <div className="place">
              <h1>{homeItem}</h1>
            </div>
            {address &&
            <div className="address">62 Lic colony indore</div>}
          </div>
        </div>
        <div className="">

          {navItems ? 
        <ul className="flex-inner-nav">
        {searchbarshown &&  <li className="nav-item">
            <div className="item-icon">
              <FiSearch className="itemIcon" />
            </div>
            <Link to="/search">
              <div className="item-hd">
                <h1>Search</h1>
              </div>
            </Link>
          </li>}
          {searchbarshown && 
           <li className="nav-item">
           <div className="item-icon">
             <BiSolidOffer className="itemIcon" />
           </div>
           <Link to="/offer">
             <div className="item-hd">
               <h1>Offers</h1>
             </div>
           </Link>
         </li>}
         
         <Link to="/help">
          <li className="nav-item">
            <div className="item-icon">
              <IoHelpBuoyOutline className="itemIcon" />
            </div>
            <div className="item-hd">
              <h1>Help</h1>
            </div>
          </li>
          </Link>
          <li
            className="nav-item"
            onClick={() => {
              handleLoginPopUp();
            }}
          >
            <div className="item-icon">
              <CgProfile className="itemIcon" />
            </div>
            <div className="item-hd">
              <h1>Profile</h1>
            </div>
          </li>

          {searchbarshown && 
          <Link to="/profile">
          <li className="nav-item">
            <div className="item-icon">
              <BiSolidPaste className="itemIcon" />
            </div>
            <div className="item-hd">
              <h1>Past Order</h1>
            </div>
          </li>
          </Link>
          }

          {searchbarshown && 
          <Link to="/card">
            <li className="nav-item">
              <div className="item-icon">
                <FaCartShopping className="itemIcon" />
              </div>

              <div className="item-hd">
                <h1>Cart</h1>
              </div>
            </li>
          </Link>}
        </ul> : <OfferNavBar/>}
        </div>
      </div>
      {showLogin && <LoginPage handleLoginPopUpClose={handleLoginPopUpClose} />}
    </>
  );
};

export default MainNavBar;
