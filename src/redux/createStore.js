/* eslint-disable import/no-anonymous-default-export */
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart";
import productsReducer from "./slices/products";
import authReducer from "./slices/auth";
import usersReducer from "./slices/users";

export default () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      products: productsReducer,
      auth: authReducer,
      users: usersReducer,
    },
    middleware: [...getDefaultMiddleware()],
    devTools: true,
  });
};
