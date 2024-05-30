import { TBasketItem } from "../store/basketSlice"

const BasketItems = ({ basket }: { basket: TBasketItem[] }) => {
  const totalItems = () => {
    return basket.reduce((a, b) => {
      return a + b.quantity
    }, 0)
  }
  return <div className="mr-4">Basket Items: {totalItems()}</div>
}

export default BasketItems
