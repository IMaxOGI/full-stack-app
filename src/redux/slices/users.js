import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("https://fakestoreapi.herokuapp.com/users");

  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    list: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default usersSlice.reducer;
export { fetchUsers };
