import {Restaurant_URL} from "../utils/constants";
import {useEffect, useState} from "react";

const userRestaurantMenu = (id) => {

    const [resDetails, setResDetails] = useState(null);
    const fetchData = async () => {
        const data = await fetch(Restaurant_URL + id + "/menu");
        const json = await data.json();
        setResDetails(json);
        
    }

    useEffect(()=>{fetchData()},[]);

    return resDetails;
}

export default userRestaurantMenu;