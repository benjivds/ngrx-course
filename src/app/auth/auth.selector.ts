import { createSelector } from "@ngrx/store";

// memorized function only execute when the input changes
export const isLoggedIn = createSelector(
  state => state["auth"],
  (auth) => !!auth.user
);

// memorized function only execute when the input changes
export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);
