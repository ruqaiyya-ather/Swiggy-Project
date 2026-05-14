import { useParams } from "react-router-dom";

import RestaurantMenuInfoCard from "./RestaurantMenuInfoCard";
import MenuItem from "./MenuItem";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menu = useRestaurantMenu(resId);

  if (!menu) {
    return (
      <div>
        <div
          style={{
            paddingLeft: "340px",
            paddingTop: "100px",
            paddingBottom: "50px",
            paddingRight: "340px",
          }}
        ></div>
        Loading...
      </div>
    );
  }

  const menuItemList =
    menu[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
  console.log(menuItemList);

  return (
    
    <div>
      <div
        style={{
          paddingLeft: "340px",
          paddingTop: "100px",
          paddingBottom: "50px",
          paddingRight: "340px",
        }}
      ></div>
      <RestaurantMenuInfoCard menuInfo={menu[2]?.card?.card?.info} />

      <h2>Menu: </h2>

      {menuItemList.map((menuItem) => {
        return (
          <MenuItem key={menuItem.card.info.id} data={menuItem.card.info} />
        );
      })}
    </div>
  );
};


export default RestaurantMenu;