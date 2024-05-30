import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { resetBasket } from "../store/basketSlice"
import ShoppingButton from "../components/ShoppingButton"
const Success = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(resetBasket())
  })
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-10">Success.</h1>

      <div>
        <ShoppingButton />
      </div>
    </div>
  )
}

export default Success
