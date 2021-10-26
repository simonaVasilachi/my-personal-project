import { createAction, props } from "@ngrx/store";

export const navigate = createAction('[Router] Navigate',
    props<{ url: string }>()
);