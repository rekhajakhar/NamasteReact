import {Restaurant_URL} from "../utils/constants";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";

const Restaurant = () => {
    const {id} = useParams();

    const [resDetails, setResDetails] = useState(null);
    const fetchData = async () => {
        const data = await fetch(Restaurant_URL + id + "/menu");
        const json = await data.json();
        setResDetails(json);
        
    }

    useEffect(()=>{fetchData()},[]);

    if(resDetails === null) {
        return <Shimmer />
    }

    return (
        <div>
            <h2>{resDetails[0]?.restaurantName}</h2>
            {resDetails.map((res)=>
                <div key={res?.itemID}>
                    <h1>{res?.name}</h1>
                    <img className="menu-image" src={res?.imageUrl}/>
                    <p>{res?.itemDescription}</p>
                    <p>{res?.itemPrice}</p>
                </div>)
            }
        </div>
    )
}

export default Restaurant;


