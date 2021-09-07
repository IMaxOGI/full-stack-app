import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await axios.get(
    "https://61370c848700c50017ef5771.mockapi.io/products2"
  );

  return response.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    list: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;
export { fetchProducts };
