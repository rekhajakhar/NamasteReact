const ItemList=({items})=>{
    console.log(items);
    return (
        <div>
            {items.map((item)=>(
                <div key={item?.card?.info?.id} className="my-2 border-b-1 bg-gray-100">
                    <div>
                    <span className="text-xs">{item?.card?.info?.imageId}</span>
                    <div>
                        <button>Add +</button>
                    </div>
                    </div>
                    <div className="my-2">
                        <span className="font-bold">{item?.card?.info?.name}</span>
                        <span> - ₹</span>
                        <span>{item?.card?.info?.price/100}</span>
                    </div>
                    <span>{item?.card?.info?.description}</span>
                </div>
            ))}
        </div>
    )
}
export default ItemList;