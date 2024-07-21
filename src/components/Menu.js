import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Shimmer from "./shimmer";
/*
this page will use dynamic routing and get 
dynamic data to display information about a restaurant
*/

// const Menu = () => {
//     const [menu, setMenu] = useState([]);
//     useEffect(() => {
//         fetchMenu();
//     }, [])

//     async function fetchMenu() {
//         const Menu = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.51800&lng=88.38320&restaurantId=13927&catalog_qa=undefined&submitAction=ENTER');
//         const menuData = await Menu.json();
//         // console.log(menuData.data);
//         // menuData.data.cards[2].card.card.info
//         setMenu(menuData.data);
//     }

//     if (menu.length === 0)
//         return <Shimmer />

//     const { itemCards } = menu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card;

//     // console.log(list.itemCards[0].card.info);

//     return (<div className="menu">
//         {/* {console.log(menu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards[0].card.info.name)} */}
//         <h1>{menu.cards[2].card.card.info.name}</h1>
//         <h2>Menu</h2>
//         <ul>
//             {itemCards.map((res) => <li>{res.card.info.name}</li>)}
//             {/* <li>{name}</li> */}
//             {/* <li>{menu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards[1].card.info.name}</li> */}
//             {/* <li>{menu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards[2].card.info.name}</li> */}
//         </ul>
//     </div>)
// }

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const resID = useParams();
  console.log(resID.resID);
  useEffect(() => {
    fetchmenu();
  }, []);

  async function fetchmenu() {
    const menudata = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.51800&lng=88.38320&restaurantId=" +
        resID.resID
      // "&catalog_qa=undefined&submitAction=ENTER"
    );
    console.log(menudata);
    const menujson = await menudata.json();
    console.log(menujson);
    setMenu(menujson.data.cards);
  }
  if (menu.length === 0) return <h1>Fetching...</h1>;
  return (
    <>
      <h1>Name:- {menu[0].card.card.text}</h1>
      {menu[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards.map(
        (dish) => (
          <li key={dish.card.info.id}>
            {dish.card.info.name} -{" "}
            {(dish.card.info.defaultPrice || dish.card.info.price) / 100}
          </li>
        )
      )}
    </>
  );
};

export default Menu;
