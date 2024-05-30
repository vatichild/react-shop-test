import { Link } from "react-router-dom"

const CheckoutButton = ({
  disabled,
  label,
  to,
}: {
  disabled: boolean
  label: string
  to: string
}) => {
  return (
    <Link to={to}>
      <button
        disabled={disabled}
        className="text-s p-2 rounded border border-blue-600 bg-blue-500  hover:bg-blue-700 disabled:bg-gray-300 disabled:border-gray-400 disabled:cursor-not-allowed text-white">
        {label}
      </button>
    </Link>
  )
}

export default CheckoutButton
