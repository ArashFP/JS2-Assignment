import { useSelector } from "react-redux"
import { CartItem } from "./CartItem"




export const ShoppingCart = () => {

  const { cart, totalAmount } = useSelector(state => state.shoppingCart)

  return (
    <div>
      <div className="">
        { cart.map(item => (
          <CartItem key={item.product._id} item={item}/>
        ))}
      </div>
      <hr className="border-gray-500"/>
      <div className="flex justify-between items-center p-2">
        <div className="text-black">
          <p>Total Price: 0</p>
          <small className="text-gray-400">Inkl. vat</small>
        </div>
        <div>
          <button className="bg-orange-700 font-medium px-3 rounded-2xl hover:bg-blue-950 transition-[900ms]"> Checkout </button>
        </div>
      </div>
    </div>
  )
}