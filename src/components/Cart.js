import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import {clearCart} from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center">
            <h1 className="text-bold text-2xl m-2 p-2">Cart</h1>
            <button className="text-bold text-2xl m-2 p-2 bg-black text-white rounded-md" onClick={handleClearCart}>Clear Cart</button>
            <ItemList items={cartItems}/>
        </div>
    )
}

export default Cart;