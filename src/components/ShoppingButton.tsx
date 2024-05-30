import { Link } from "react-router-dom"

const ShoppingButton = () => {
  return (
    <Link
      to="/"
      className="text-s p-2 rounded border border-gray-200 hover:bg-gray-200 hover:bg-gray-300">
      Continue Shopping
    </Link>
  )
}

export default ShoppingButton
