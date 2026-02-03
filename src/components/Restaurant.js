
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Restaurant = () => {
    const {id} = useParams();

    const resDetails=useRestaurantMenu(id);

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


