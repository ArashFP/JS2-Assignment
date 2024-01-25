const ProductCard = ({ product }) => {
  return (
    <div className="text-black flex flex-col items-start h-64">
      <div className="bg-white border-4 border-blue-200 p-4 flex flex-col items-center justify-center overflow-hidden" style={{ width: '200px', height: '200px' }}>
        <img className="w-full h-full object-cover" src={product.images[0]} alt={product.description} />
        <p className="h-16 ">{product.name}</p>   
      </div>
    </div>
  )
}
export default ProductCard