import { createSlice } from "@reduxjs/toolkit";
//import type { PayloadAction } from "@reduxjs/toolkit";
export type TProduct =  {
  sku: number;
  name: string;
  description: string;
  price: number;
  basketLimit: number;
}

export type TProductsState = {
  products: TProduct[];
}

const initialState: TProductsState = {
  products: [
    {
      sku: 1,
      name: "Red Product",
      description: "Red Product description",
      price: 1.01,
      basketLimit: 5,
    },
    {
      sku: 2,
      name: "Orange Product",
      description: "Orange Product description",
      price: 2.02,
      basketLimit: 4,
    },
    {
      sku: 3,
      name: "Yellow Product",
      description: "Yellow Product description",
      price: 3.03,
      basketLimit: 3,
    },
    {
      sku: 4,
      name: "Green Product",
      description: "Green Product description",
      price: 4.04,
      basketLimit: 2,
    },
    {
      sku: 5,
      name: "Blue Product",
      description: "Blue Product description",
      price: 5.05,
      basketLimit: 1,
    },
  ],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
