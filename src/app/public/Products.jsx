import { useEffect, useState } from "react"
import axios from 'axios'
import ProductCard from "../../components/ProductCard"

function Products() {
  
  const [products, setProducts] = useState([])

  useEffect(() => {

    const getProducts = async () => {
      const res = await axios.get('https://js2-ecommerce-api.vercel.app/api/products')
      setProducts(res.data)
      
    }
    getProducts()
  }, [])

  return (
    <div className="grid grid-cols-6 gap-4 mt-8 justify-items-center items-center">
      {
        products.map(product =>( 
          <ProductCard key={product._id} product={product} />
        ))
      }
    </div>
  )
}
export default Products