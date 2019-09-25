import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

// feature selector to make store typesafe
export const selectAuthState = createFeatureSelector<AuthState>("auth");
// memorized function only execute when the input changes
/*export const isLoggedIn = createSelector(
  state => state["auth"],
  (auth) => !!auth.user
);*/

export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);

// memorized function only execute when the input changes
export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);
