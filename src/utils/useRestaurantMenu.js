import {RESTAURANT_URL_NAMASTE_DEV} from "../utils/constants";
import {useEffect, useState} from "react";

const useRestaurantMenu = (id) => {

    const [resDetails, setResDetails] = useState(null);
    const fetchData = async () => {
        const data = await fetch(RESTAURANT_URL_NAMASTE_DEV + id);
        const json = await data.json();
        //filter the cards with ItemCategory in regular
        const allCards = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        
        const filteredCards=allCards.filter((c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        
        setResDetails(filteredCards);
        //console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
    }

    useEffect(()=>{fetchData()},[]);

    return resDetails;
}

export default useRestaurantMenu;