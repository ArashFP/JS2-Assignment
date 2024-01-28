import { FaTrashAlt } from "react-icons/fa";
import { HiMinusCircle } from "react-icons/hi";
import { HiPlusCircle } from "react-icons/hi";
import { removeOne } from "../store/features/shoppingCart/shoppingCartSlice";
import { useDispatch } from "react-redux";




export const CartItem = ({ item }) => {

  const dispatch = useDispatch()

  const removeOneFromCart = () => {
    dispatch(removeOne(item.product._id))
  }

  return (
    <div className="flex justify-between items-center p-2 text-black">
      <div  className="flex items-center">
        <img src={item.product.images[0]} alt="product-image" className="w-[100px]" />
        <div>
          <p className="font-semibold truncate">{ item.product.name }</p>
          <p className="text-sm">{ item.quantity } x { item.product.price }</p>
        </div>
      </div>
      <div className="flex ">
        <div>
          <button onClick={removeOneFromCart} className="p-1 rounded-s-md text-xl font-bold"> <HiMinusCircle /> </button>
          <button className="p-1 rounded-s-md text-xl font-bold"> <HiPlusCircle /> </button>
        </div>
        <button className="p-2"> <FaTrashAlt /></button>
      </div>
    </div>
  )
}