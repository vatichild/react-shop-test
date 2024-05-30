import TotalPrice from "../components/TotalPrice"
import type { RootState } from "../store/store"
import { useSelector } from "react-redux"

const Header = ({ children }: { children?: React.ReactNode }) => {
  const basket = useSelector((state: RootState) => state.basket.basket)
  const products = useSelector((state: RootState) => state.products.products)
  const totalPrice = () => {
    let sum = 0
    basket.forEach((item) => {
      const product = products.find((product) => product.sku === item.sku)
      if (product !== undefined) {
        sum += product.price * item.quantity
      }
    })
    return Number(sum.toFixed(2))
  }
  return (
    <nav className="flex flex-row justify-end p-4 border-b text-base">
      <div className="mr-4">
        Basket Items:
        {basket.reduce((a, b) => {
          return a + b.quantity
        }, 0)}
      </div>
      <TotalPrice totalPrice={totalPrice()} />
    </nav>
  )
}

export default Header
