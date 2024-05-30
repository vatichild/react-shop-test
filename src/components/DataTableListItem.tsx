import RemoveButton from "./RemoveButton"
import type { TBasketItem } from "../store/basketSlice"
import { changeQuantity, removeFromBasket } from "../store/basketSlice"
import { useDispatch } from "react-redux"
import Quantity from "./Quantity"
import { ChangeEvent } from "react"
const DataTableListItem = ({ product }: { product: TBasketItem }) => {
  const dispatch = useDispatch()

  return (
    <tr>
      <td className="py-4 w-1/6">{product.name}</td>
      <td className="w-1/8">
        <Quantity
          selected={product.quantity}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            return dispatch(
              changeQuantity({
                ...product,
                quantity: Number(e.target.value),
              })
            )
          }}
        />
      </td>
      <td className="w-1/8">£{product.price}</td>
      <td className="w-1/8">
        £{(product.price * product.quantity).toFixed(2)}
      </td>
      <td>
        <RemoveButton
          label="Remove All"
          onClick={() => dispatch(removeFromBasket(product.sku))}
        />
      </td>
    </tr>
  )
}

export default DataTableListItem
