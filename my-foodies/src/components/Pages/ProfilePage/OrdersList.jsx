import React from "react";
import "./ProfilePage.css"
import OrderCard from "./OrderCard";

const OrdersList = ({orderData}) => (
    <div className="orders-list">
      {orderData.map(order => <OrderCard key={order.id} order={order} />)}
    </div>
  );

  export default OrdersList;