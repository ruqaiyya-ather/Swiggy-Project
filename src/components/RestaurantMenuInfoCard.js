const RestaurantMenuInfoCard = ({ menuInfo }) => {
  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
  } = menuInfo;
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {avgRatingString} ({totalRatingsString}) • {costForTwoMessage}
      </p>
      <p>{cuisines?.join(", ")}</p>
    </div>
  );
};

export default RestaurantMenuInfoCard;