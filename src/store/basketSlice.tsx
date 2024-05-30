import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { TProduct } from "./productsSlice"

export type TBasketItem = {
  quantity: number
} & TProduct

export type TBasketState = {
  basket: TBasketItem[]
  cardNumber: string
}

const initialState: TBasketState = {
  basket: [],
  cardNumber: "",
}

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<TBasketItem>) => {
      const foundItem = state.basket.find(
        (item) => item.sku === action.payload.sku
      )
      if (foundItem === undefined) {
        state.basket.push(action.payload)
        return
      }
      foundItem.quantity += action.payload.quantity
    },
    changeQuantity: (state, action: PayloadAction<TBasketItem>) => {
      const foundItem = state.basket.find(
        (item) => item.sku === action.payload.sku
      )
      if (foundItem === undefined) {
        state.basket.push(action.payload)
        return
      }
      foundItem.quantity = action.payload.quantity
    },
    removeFromBasket: (state, action: PayloadAction<number>) => {
      state.basket = state.basket.filter((item) => item.sku !== action.payload)
    },
    setCardNumber: (state, action: PayloadAction<string>) => {
      state.cardNumber = action.payload
    },
    resetBasket: (state) => {
      Object.assign(state, initialState)
    },
  },
})

export const {
  addToBasket,
  removeFromBasket,
  changeQuantity,
  setCardNumber,
  resetBasket,
} = basketSlice.actions
export default basketSlice.reducer
