import RestaurantCard, {withOpenLable} from "./RestaurantCard";
import {useState, useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {FETCH_RESTAURANTS_URL} from "../utils/constants";
import UserContext from "../utils/UserContext";

// fetch data & set to state 
// shimmer ui
const Body = () => {
    const [resFilteredList, setResFilteredList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    const [searchText, setSearchText] = useState("");

    const OpenLabel = withOpenLable(RestaurantCard);

    const {setuserName} = useContext(UserContext);

    useEffect(() => {
        fetchData()
    },[]);

    const fetchData = async () => {
        const data = await fetch(FETCH_RESTAURANTS_URL);
        const json = await data.json();
        console.log(json);
        setResFilteredList(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredList(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
        return (
            <h1>you are offline. Please check your internet!!</h1>
        )
    }

    if(resFilteredList.length === 0) {
        return <Shimmer />
    }

    return (
        <div>
            <div className="flex flex-wrap m-4 p-4">
                <div className="m4 p4 flex-wrap ">
                <input type="text" className="border-2 rounded-lg" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
                <button className="px-4 m-4 rounded-lg bg-blue-500" onClick={() => {
                    console.log(searchText);
                    const filteredList = resFilteredList.filter((res)=>{ return  res.info.name.toLowerCase().includes(searchText.toLowerCase())});
                    setFilteredList(filteredList);
                    }}>Search</button>
                </div>
                <button className="px-4 py-0 rounded-lg bg-blue-500" onClick={ () => {
                    setFilteredList(resFilteredList.filter( (res) => res.info.avgRating >= 4.4))
                }
                }>Filter Top Rated Restaurants</button>
                <input className="border-2 mx-4 p-2" type="text" onChange={(e)=>setuserName(e.target.value)}/>
            </div>
            <div className="flex flex-wrap">
                {(filteredList.map((restaurant) => (
                    <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>
                        {/**if isOpen===true then show the new resttaurant card with label as open on it via high order components */}
                        {restaurant.info.isOpen?<OpenLabel resData={restaurant}/>:<RestaurantCard  resData={restaurant}/>}
                     
                    </Link>
                    )))}
            </div>
        </div>
    )
}

export default Body;