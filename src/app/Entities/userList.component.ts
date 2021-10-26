import { Component, Input } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { navigate } from "../Services/route.actions";
import { userSelector } from "../Services/user.selector";
import { UserInfo } from "./userInfo.model";

@Component(
    {
        selector: 'user-list-component',
        templateUrl: 'userList.component.html'
    }
)

export class UserListComponent {
    @Input() data: any
    public userInfoList: UserInfo[] = [];

    constructor(
        private store: Store
    ) {}

    ngOnInit() {
        this.store.pipe(
            select(userSelector)
        ).subscribe((results) => {
            this.userInfoList = results;
        })
    }

    gotoLoginView() {
        console.log('[UserListComponent] gotoLoginView')
        this.store.dispatch(navigate({url: 'login'}))
    }
}
