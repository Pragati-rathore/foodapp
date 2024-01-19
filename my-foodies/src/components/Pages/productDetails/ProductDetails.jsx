import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { IoStarSharp } from "react-icons/io5";
import { BsClockFill } from "react-icons/bs";
import CouponCard from "../CouponCard/CouponCard";


function ProductDetails() {
  const { id } = useParams;
  const loc = useLocation();
  console.log(loc);
  const detailsPduct = loc.state;

  return (
    <>
      <div className="Main-container">
        <div className="main-box">
          <div>
            <ul className="details-nvgn">
              <Link to="/">
                <li>
                  <p className="nvgn-p">Home/</p>
                </li>
              </Link>

              <li>
                <p className="nvgn-p">Indore/</p>
              </li>
              <li>
                <p className="nvgn-p-restro">{detailsPduct.RestName}</p>
              </li>
            </ul>
          </div>
          <div className="main-prduct-dtl">
            <div className="Card_box_dtl">
              <div className="box">
                <div className="restroNamedtl">
                  <h1>{detailsPduct.RestName}</h1>
                </div>
                <div>
                  <p className="itemH-dtl">{detailsPduct.filterData}</p>
                </div>
                <div className="star-box">
                  <p className="itemH-dtl"> {detailsPduct.address}</p>
                  
                </div>
              </div>
            </div>

            <div className="rateing">
              <div className="rtng-no">
                <IoStarSharp className="startIcon-dtl" />
                <p className="startIcon-dtl">{detailsPduct.star}</p>
              </div>
              <div>
                <p className="ratng-count">{detailsPduct.ratingCount} rating</p>
              </div>
            </div>
          </div>
          <div className="time">
            <div>
              <BsClockFill />
            </div>

            <div>
              <p>{detailsPduct.distance}</p>
            </div>
          </div>
          <div className="coupan">
            {detailsPduct.CouponCard.map((item, i) => (
              <CouponCard coponDetails={item} key={i} />
            ))}
          </div>
          <div className="rcmnd-main">
            <div >
              <h1 className="rcmnd-hd">Recommended</h1>
              {detailsPduct.menu.map((item, i) => (
                <div className="card-box" key={i}>
                  <div className="card-hd">
                    <h1 className="food-name">{item.foodItem}</h1>
                    <p  className="food-para">₹{item.price}</p>
                    <div className="card-dscrptn">
                      <p>{item.descrption}</p>
                    </div>
                  </div>
                  <div className="card-img-box">
                  <div className="card-img">
                    <img src={item.imgCard} alt="img-card"/>
                  </div>
                  <div className="add-card"> 
                  <button>Add+</button>
                  </div>
                    </div>
                 

                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
