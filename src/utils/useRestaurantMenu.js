import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(process.env.MENU_URL + resId);
      const data = await response.json();
      console.log("setting this in menu", data.data.cards);
      setMenu(data.data.cards);
    } catch (error) {
      console.log(error);
    }
  }

  return menu;
};

export default useRestaurantMenu;