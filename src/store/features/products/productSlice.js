import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  products: [],
  error: null,
  loading: false
}

export const productsSlice = createSlice()