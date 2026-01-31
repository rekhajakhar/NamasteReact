import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockdata";
import {useState} from "react";

const Body = () => {
    const [resFilteredList, setresFilteredList] = useState(restaurantList);
    return (
        <div>
            <div className="search">
                <button className="filter-btn" onClick={ () => {
                    setresFilteredList(resFilteredList.filter( (res) => res.data.avgRating >= 4))
                }
                }>Filter Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {(resFilteredList.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/> 
                    )))}
            </div>
        </div>
    )
}

export default Body;