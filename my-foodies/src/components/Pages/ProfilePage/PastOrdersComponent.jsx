import React from "react";
import UserProfile from "./UserProfile";
import OrdersList from "./OrdersList";
import "./ProfilePage.css"
import NavBar from "../NavBar/NavBar";
// const PastOrdersComponent = ({ userData, orders }) => (



//     <div className="past-orders-container">
//       <UserProfile {...userData} />
//       <OrdersList orders={orders} />
//     </div>
//   );


const PastOrdersComponent = () =>{

    const orderData = [
        {
          id: "order1",
          restaurantName: "Pizza Hut",
          location: "Sudama Nagar",
          deliveryDate: "Sat, Aug 5, 2023, 10:30 PM",
          status: "Delivered",
          image: "pizza-image-1.jpg", // Replace with actual image path
          items: [
            { id: "item1", name: "Classic Onion Capsicum", quantity: 1 },
            { id: "item2", name: "Classic Corn", quantity: 1 }
          ],
          totalPaid: 205
        },
        {
          id: "order2",
          restaurantName: "Burger King",
          location: "MG Road",
          deliveryDate: "Mon, Jul 24, 2023, 8:15 PM",
          status: "Delivered",
          image: "burger-image-2.jpg", // Replace with actual image path
          items: [
            { id: "item3", name: "Whopper Burger", quantity: 2 },
            { id: "item4", name: "King Fries", quantity: 1 }
          ],
          totalPaid: 350
        },
        {
          id: "order3",
          restaurantName: "Subway",
          location: "Infantry Road",
          deliveryDate: "Wed, Aug 2, 2023, 1:05 PM",
          status: "Delivered",
          image: "subway-image-3.jpg", // Replace with actual image path
          items: [
            { id: "item5", name: "Italian BMT Sub", quantity: 1 },
            { id: "item6", name: "Veggie Delite Salad", quantity: 1 }
          ],
          totalPaid: 275
        },
        {
          id: "order4",
          restaurantName: "Starbucks",
          location: "Church Street",
          deliveryDate: "Fri, Aug 11, 2023, 4:00 PM",
          status: "Delivered",
          image: "starbucks-image-4.jpg", // Replace with actual image path
          items: [
            { id: "item7", name: "Caffè Americano", quantity: 1 },
            { id: "item8", name: "Blueberry Muffin", quantity: 2 }
          ],
          totalPaid: 420
        }
      ];
      
      

    return<>
    <NavBar/>
    <div className="Main-container">
    <div className="past-orders-container">
      <UserProfile  />
      <OrdersList orderData={orderData} />
    </div>
    </div>
  </>
  }

  export default PastOrdersComponent;