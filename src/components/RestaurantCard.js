import { baseURL } from "../utils/constants";

const RestaurantCard = ({ hotelData }) => {
  const info = hotelData?.info || hotelData;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
  } = info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`${baseURL}${cloudinaryImageId}`}
        alt="restaurant-logo"
      />

      <h3>{name}</h3>

      <h4>{cuisines.join(", ")}</h4>

      <h4>{avgRating} stars</h4>

      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;