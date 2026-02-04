
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";

const RestaurantMenu = () => {
    const {id} = useParams();

    const resDetails=useRestaurantMenu(id);
    
    const [showItems, setShowItems]=useState(null);

    if(resDetails === null) {
        return <Shimmer />
    }
    console.log(resDetails);
    //const {name,description,price, imageId}=resDetails?.card?.info;
    return (
        <div>
            <div className="w-1/2 mx-auto">
                {/**lets add a accordion here & all the menu below it  for each card call RestaurantCategory component it will display accordion header & body then from there for body creare bew compoent ItemList for display*/}
                {}
            {resDetails.map((res, index)=>
                    <RestaurantCategory 
                    key={res?.card?.card?.title} 
                    data ={res?.card?.card}
                    showItems={showItems===index?true:false}
                    setShowItems={()=>setShowItems(index)}/>
                )
            }
            </div>
        </div>
    )
}

export default RestaurantMenu;


