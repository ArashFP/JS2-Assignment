const Card = ({ children }) => {
  return (
    <div className="border border-blue-800 text-center mt-10 bg-blue-700 text-white mx-auto w-1/2 rounded-lg ">
      { children }
    </div>
  )
}
export default Card