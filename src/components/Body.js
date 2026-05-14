import { resArray } from "../utils/mockData";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
 const [hotelList, setHotelList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    const response = await fetch(
  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
);
      const json = await response.json();
      console.log(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
      );
      setHotelList(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
      );
    };
    fetchData();
  }, []);
   if (!hotelList) {
    return <Shimmer />;
  }
  return (

    <div className="body">
      <div className="filter-btn-div">
        <button
          onClick={() => {
  const filteredArr = hotelList.filter(
    (resObj) => resObj.info.avgRating >= 4.5
  );

  setHotelList(filteredArr);
}}
          className="filter-btn"
        >
          Top Rated Restaurants
        </button>
        
      </div>

      <div className="res-container">
        {hotelList.map((restaurant) => (
         <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}className="link"
>
  <RestaurantCard hotelData={restaurant.info} />
</Link>
          ))}
      </div>
    </div>

       
  );
};



export default Body;




