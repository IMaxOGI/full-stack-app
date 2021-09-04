import { createSelector } from "@reduxjs/toolkit";

export const getUsers = createSelector(
  (state) => state.users.list,
  (list) => list
);

export const getUsersLoading = createSelector(
  (state) => state.users.loading,
  (loading) => loading
);
