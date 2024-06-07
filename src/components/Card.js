import { CARD_URL } from "../utils/constants";

const Card = ({ resData }) => {
    return (
        <div className="card">
            <div>
                <img className="card-img" src={CARD_URL + resData.info.cloudinaryImageId} alt="biryani" />
            </div>
            <div className="card-body">
                <h2>{resData.info.name}</h2>
                <p>{resData.info.costForTwo}</p>
                <p>{resData.info.avgRating + " out of 5"}</p>
                <p>{resData.info.sla.slaString}</p>
            </div>
        </div>
    );
};

export default Card;