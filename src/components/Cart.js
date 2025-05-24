import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch()
    const emptyCart = () => {
        dispatch(clearCart())
    }
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="m-4 p-4 text-center ">
        <div className=" w-6/12 m-auto flex justify-between mb-6">
      <h1 className="font-bold text-2xl m-auto ">Cart</h1>
      <button onClick={emptyCart} className="bg-red-400 text-white p-2 rounded-2xl border border-black ">Clear</button>
      </div>
      <div className=" w-6/12 m-auto ">
        <ItemList items={cartItems} />
      </div>
      {cartItems.length === 0 && "Cart is empty"}
    </div>
  );
};
export default Cart;
