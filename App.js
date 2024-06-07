import React from "react";
import ReactDOM from "react-dom/client";
import logo from "/Images/logo.jpg";
import biryani from "/Images/biryani.jpeg";

/*
*  Header
    - logo
    - list 
  Body
    - search
    - Card
  Footer
    - contact us
    - Copyright
    - Address
*/

const List = () => {
  return (
    <ul className="list">
      <li>
        <a href="#">About us</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Profile</a>
      </li>
      <li>
        <a href="#">Cart</a>
      </li>
    </ul>
  );
};

const Heading = () => {
  return (
    <div className="navbar">
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <List />
    </div>
  );
};

// Data in JSON format coming from an API

const resObj =
{
  "info": {
    "id": "18117",
    "name": "Hindusthan Sweets",
    "cloudinaryImageId": "criuo3dsgvodsed1vxl2",
    "locality": "Near 8B Bus stand",
    "areaName": "Jadavpur",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Sweets",
      "Desserts",
      "Snacks",
      "Bakery"
    ],
    "avgRating": 4.6,
    "veg": true,
    "parentId": "3371",
    "avgRatingString": "4.6",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 34,
      "lastMileTravel": 4,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "4.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-06-07 20:30:00",
      "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "30% OFF",
      "subHeader": "UPTO ₹75"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
      }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
  },
  "analytics": {},
  "cta": {
    "link": "https://www.swiggy.com/restaurants/hindusthan-sweets-near-8b-bus-stand-jadavpur-kolkata-18117",
    "type": "WEBLINK"
  }
}

const Card = ({ resData }) => {
  return (
    <div className="card">
      <div>
        <img className="card-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} alt="biryani" />
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
        <Card resData={resObj} />
        <Card resData={resObj} />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Heading />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
