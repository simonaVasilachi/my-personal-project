import { createAction, props } from "@ngrx/store";
import { UserInfo } from "../Entities/userInfo.model";

export const login = createAction('[Login Action] Login',
    props<{ login: UserInfo }>()
);