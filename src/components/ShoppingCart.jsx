import { useDispatch, useSelector } from "react-redux"
import { CartItem } from "./CartItem"
import { calculateTotalPrice, clearCart } from "../store/features/shoppingCart/shoppingCartSlice"
import { useEffect } from "react"
import { Link } from "react-router-dom"




export const ShoppingCart = ({ isCheckoutPage, setIsOpen}) => {

  const { cart, totalPrice } = useSelector(state => state.shoppingCart)

  
  const dispatch = useDispatch()

  const clearCartEntierly = () => {
    dispatch(clearCart())
  }
  
  useEffect(() => {
    dispatch(calculateTotalPrice());
  }, [cart, dispatch]);

  function placeOrderAlert() {
    alert('Thank you for your purchase!')
  }


  return (
    <div>
      <div>
        { cart.length < 1 && (
          <div className="text-black text-center py-10">
            <p> Cart is Empty </p>
          </div>
        )}
        { cart.map(item => (
          <CartItem key={item.product._id} item={item}/>
        ))}
      </div>
      <hr className="border-gray-500"/>
      <div className="flex justify-between items-center p-2">
        <div className="text-black">
          <p>Total Price: {totalPrice}SEK</p>
          <small className="text-gray-400">Inkl. vat</small>
        </div>
        <div className="flex gap-2">
          <button onClick={clearCartEntierly} className="bg-orange-700 font-medium px-3 rounded-2xl hover:bg-orange-400 transition-[900ms]"> Clear Cart</button>
          { isCheckoutPage &&
            <button onClick={() => { placeOrderAlert(); clearCartEntierly(); }} className="bg-orange-700 font-medium px-3 rounded-2xl hover:bg-orange-400 transition-[900ms]"> Place Order</button>
          }
          { !isCheckoutPage && 
            <Link onClick={() => setIsOpen(false)} to="/private/checkout" className="bg-orange-700 font-medium px-3 rounded-2xl hover:bg-orange-500 transition-[900ms]"> Checkout </Link>
          }          
        </div>
      </div>
    </div>
  )
}