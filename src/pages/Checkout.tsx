import type { RootState } from "../store/store"
import { useSelector, useDispatch } from "react-redux"
import DataTable from "../components/DataTable"
import { setCardNumber } from "../store/basketSlice"
import DataTableListItem from "../components/DataTableListItem"
import CardNumberInput from "../components/CardNumberInput"
import CheckoutButton from "../components/CheckoutButton"
import { ChangeEvent } from "react"
import ShoppingButton from "../components/ShoppingButton"

const Checkout = () => {
  const { cardNumber, basket } = useSelector((state: RootState) => state.basket)
  const dispatch = useDispatch()
  return (
    <>
      <DataTable>
        {basket.map((product) => (
          <DataTableListItem
            key={product.sku}
            product={product}
          />
        ))}
      </DataTable>
      <CardNumberInput
        defaultValue={cardNumber}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          dispatch(setCardNumber(e.target.value))
        }}
      />
      <div className="flex flex-row justify-end mt-6 px-8  gap-2">
        <ShoppingButton />
        <CheckoutButton
          to="/success"
          label="Checkout"
          disabled={!basket.length || cardNumber === ""}
        />
      </div>
    </>
  )
}
export default Checkout
