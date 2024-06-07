import Card from "./Card";
import resObj from "../utils/mockData";
//named import
import { useState } from "react";

const Body = () => {
    const [resList, setResList] = useState(resObj);
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