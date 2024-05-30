import AddButton from "./AddButton"
import RemoveButton from "./RemoveButton"
import type { RootState } from "../store/store"
import { useEffect } from "react"
import { addToBasket, removeFromBasket } from "../store/basketSlice"
import { useDispatch, useSelector } from "react-redux"
import CheckoutButton from "./CheckoutButton"
const ProductsList = () => {
  const products = useSelector((state: RootState) => state.products.products)
  const basket = useSelector((state: RootState) => state.basket.basket)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(basket)
  }, [basket])
  return (
    <>
      {products.map((product) => {
        return (
          <div
            className="flex flex-row justify-between items-center mt-4"
            key={product.sku}>
            <div className="w-1/6 font-bold">{product.name}</div>
            <div className="w-1/4">{product.description}</div>
            <div className="w-1/8">£{product.price}</div>
            <AddButton
              onClick={() => dispatch(addToBasket({ ...product, quantity: 1 }))}
            />
            <RemoveButton
              disabled={!basket.some((item) => item.sku === product.sku)}
              label="Remove from Basket"
              onClick={() => dispatch(removeFromBasket(product.sku))}
            />
          </div>
        )
      })}
      <div className="flex flex-row justify-end mt-6">
        <CheckoutButton
          to="/checkout"
          label="Proceed to checkout"
          disabled={!basket.length}
        />
      </div>
    </>
  )
}

export default ProductsList
