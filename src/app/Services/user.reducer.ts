import { createReducer, on } from "@ngrx/store";
import { UserInfo } from "../Entities/userInfo.model";
import { login } from "./login.action";

export const initialState: UserInfo[] = [];

const _userReducer = createReducer(
    initialState,
    on(login, (state, action) => {
        const new_state = [...state];
        new_state.push(action.login)
        return new_state;
    }),
);

export function userReducer(state: any, action: any) {
    return _userReducer(state, action);
}