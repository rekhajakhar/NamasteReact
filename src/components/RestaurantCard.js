import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, deliveryTime} =resData?.data;
    return (
        <div>
            <div className="res-card">
                <img className="res-logo"
                alt="res-logo"
                src={CDN_URL}/>
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{deliveryTime} mins</h4>
            </div>
        </div>
    )
}

export default RestaurantCard;