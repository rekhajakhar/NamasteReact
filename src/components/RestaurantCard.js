import {CDN_URL} from "../utils/constants";
import UserContext from "../utils/UserContext";
import {useContext} from "react";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, sla} = resData?.info;
    const {loggedInUserName} = useContext(UserContext);
    return (
        <div>
            <div className="bg-gray-100 m-4 p-4 rounded-lg hover:bg-gray-200">
                <img className="w-56 h-56 rounded-lg "
                alt="res-logo"
                src={CDN_URL + resData?.info?.cloudinaryImageId}/>
                <h3 className="font-bold py-2">{name}</h3>
                <h4 className=" flex flex-wrap">{cuisines.join(", ")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{sla.deliveryTime} mins</h4>
                <h4>User:{loggedInUserName}</h4>
            </div>
        </div>
    )
}

export const withOpenLable =(RestaurantCard)=>{
    return ((props)=>{
        return (
            <div>
                <h1 className="absolute m-2 p-2 bg-black text-white rounded-lg">Open</h1>
                <RestaurantCard {...props}/>
            </div>
        )
    })
}

export default RestaurantCard;