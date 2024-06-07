import Card from "./Card";
import resObj from "../utils/mockData";

const Body = () => {
    return (
        <div>
            <input
                type="text"
                className="search"
                name="search"
                placeholder="Enter you favourite food..."
            />
            <div className="card-container">
                {resObj.map((restaurant) => <Card key={restaurant.info.id} resData={restaurant} />)}
            </div>
        </div>
    );
};

export default Body;