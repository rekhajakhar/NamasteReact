
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowItems})=>{

    const {title, itemCards} = data;

    //const [showItems, setShowItems]=useState(false);

    const accordionClickHandler =()=>{
        setShowItems();
        //setShowItems(!showItems);
    }
    //create an accordion with header as title & itemCards as body
    return (
        <div>
            <div className =" border-b-2 bg-gray-200 py-2 my-6">
            <div className="flex justify-between items-center text-xl font-bold cursor-pointer" onClick={accordionClickHandler}>
                <span >{title}</span>
                <span className="cursor-pointer">⬇️</span>
            </div>
            </div>
            {/**<ItemList items={itemCards}/>*/}
            {showItems && <ItemList items={itemCards}/>}
        </div>
    )
}

export default RestaurantCategory;