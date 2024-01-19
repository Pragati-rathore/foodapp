import React  from "react";
import OnlineDelivery from "../OnlineDelivery/OnlineDelivery";
import NavBar from "../NavBar/NavBar";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { setScrollValue } from "../../../Store Folder/Slice Folder/NavBarSlice";


function OfferPage() {

  const isScrolled = useSelector((state) => state.NavBarChng.isScrolled);
  const scrollValue = useSelector((state) => state.NavBarChng.scrollValue);
  const dispatch = useDispatch();

  useEffect(() => {
    // Set the scroll value for this page
    dispatch(setScrollValue(100)); // Replace 50 with your desired value

    // Cleanup function to reset the scroll value when component unmounts
    return () => {
      dispatch(setScrollValue(0)); // Reset to default or another value
    };
  }, [dispatch]);
  
   
  
    return (
      <>
      <NavBar   isScrolled ={isScrolled} navType="filterNav"  scrollValue={scrollValue}  />
     <div className="Main-container">
        <OnlineDelivery/>
       
     </div>
       
      </>
    )
  }
  
  export default OfferPage;