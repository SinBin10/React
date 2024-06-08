import Card from "./Card";
import resObj from "../utils/mockData";
//named import
import { useState, useEffect } from "react";

const Body = () => {
    const [resList, setResList] = useState(resObj);
    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setResList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    return (
        <div>
            <input
                type="text"
                className="search"
                name="search"
                placeholder="Enter you favourite food..."
            />
            <button className="btn" onClick={() => { const filteredlist = resObj.filter((restaurant) => { return restaurant.info.avgRating > 4 }); setResList(filteredlist); }}>Filter by rating</button>
            <div className="card-container">
                {resList.map((restaurant) => <Card key={restaurant.info.id} resData={restaurant} />)}
            </div>
        </div>
    );
};

export default Body;