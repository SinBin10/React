import { useState, useEffect } from "react";

const useFetchData = ({ resID }) => {
  console.log("hello: ", resID);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const menudata = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.51800&lng=88.38320&restaurantId=" +
        resID
      // "&catalog_qa=undefined&submitAction=ENTER"
    );
    const menujson = await menudata.json();
    console.log(menujson);
    setMenu(menujson.data.cards);
  }
  return menu;
};

export default useFetchData;
