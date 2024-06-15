import Card from "./Card";
//named import
import { useState, useEffect } from "react";

import Shimmer from "./shimmer";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [search, setSearch] = useState("");
    const [copylist, setCopyList] = useState([]);
    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setResList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setCopyList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    //conditional rendering
    return resList.length === 0 ? (<div className="shimmer-container">
        <Shimmer />
    </div>) : (
        <div>
            <div className="search">
                <input
                    type="text"
                    className="search"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value) }}
                />
                <button onClick={() => {
                    const list = copylist.filter((res) => { return res.info.name.toLowerCase().includes(search.toLowerCase()) });
                    setResList(list);
                }}>Search</button>
            </div>
            <button className="btn" onClick={() => { const filteredlist = resList.filter((restaurant) => { return restaurant.info.avgRating > 4.3 }); setResList(filteredlist); }}>Filter by rating</button>
            <div className="card-container">
                {resList.map((restaurant) => <Card key={restaurant.info.id} resData={restaurant} />)}
            </div>
        </div>
    );
};

export default Body;