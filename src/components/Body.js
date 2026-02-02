import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
// fetch data & set to state 
// shimmer ui
const Body = () => {
    const [resFilteredList, setResFilteredList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData()
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.913195536637573&lng=77.61544469743967&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setResFilteredList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    if(resFilteredList.length === 0) {
        return <Shimmer />
    }

    return (
        <div>
            <div className="search">
                <div>
                <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
                <button className="search-btn" onClick={() => {
                    console.log(searchText);
                    const filteredList = resFilteredList.filter((res)=>{ return  res.info.name.toLowerCase().includes(searchText.toLowerCase())});
                    setFilteredList(filteredList);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={ () => {
                    setFilteredList(resFilteredList.filter( (res) => res.info.avgRating >= 4.4))
                }
                }>Filter Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {(filteredList.map((restaurant) => (
                    <Link to={"/restaurant/"+restaurant.info.id%10} key={restaurant.info.id}>
                    <RestaurantCard  resData={restaurant}/> 
                    </Link>
                    )))}
            </div>
        </div>
    )
}

export default Body;