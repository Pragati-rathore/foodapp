
import { BiSolidOffer } from "react-icons/bi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const OfferNavBar = () => {
    const bgColor = { backgroundColor: " rgb(240, 240, 245)" ,border:"none"};
    // const searchBarWidth = {width:"27rem"}

 return (
      <>
       <ul className="flex-inner-nav">
          <li className="nav-item" >
            <div style={{width:"27rem"}}>
            <SearchBar bgColor={bgColor}  />
            </div>
           
          </li>
          <li className="nav-item">
           
            <Link to="/offer">
            <IoPersonCircleSharp  className="profile-icon"/>
            </Link>
          </li>
         
        </ul>
      </>
    );
  };

  export default OfferNavBar;