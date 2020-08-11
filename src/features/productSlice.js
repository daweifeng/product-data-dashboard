import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const PRODUCT_LOADING = "PRODUCT_LOADING";
export const PRODUCT_FULFILLED = "PRODUCT_FULFILLED";
export const PRODUCT_REJECTED = "PRODUCT_REJECTED";
export const PRODUCT_IDLE = "PRODUCT_IDLE";


export const fetchProduct = createAsyncThunk("product/fetchProduct", async () => {
  const data = await (await fetch("./Webdev_data2.json")).json();

  return data[0];
})

export const productSlice = createSlice({
  name: "product",
  initialState: {
    status: PRODUCT_IDLE,
    errorMessage: null,
    data: {}
  },
  reducers: {},
  extraReducers: {
    [fetchProduct.pending]: (state, action) => {
      state.status = PRODUCT_LOADING;
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.status = PRODUCT_FULFILLED;
      state.data = action.payload;
    },
    [fetchProduct.rejected]: (state, action) => {
      state.status = PRODUCT_REJECTED;
      state.errorMessage = action.payload;    
    }
  }
});

export const selectProduct = (state) => state.product.data;

export default productSlice.reducer;