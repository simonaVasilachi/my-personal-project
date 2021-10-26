import { createSelector } from "@ngrx/store";

export const selectFeature = (state: any) => state.login;

export const userSelector = createSelector(
    selectFeature,
    (state) => state
);