import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserInfo } from "src/app/Entities/userInfo.model";
import { Store } from '@ngrx/store';
import { login } from "src/app/Services/login.action";
import { navigate } from "src/app/Services/route.actions";



@Component(
    {
        selector: 'login-component',
        templateUrl: 'login.component.html',
        styleUrls: ['login.component.css']
    }
)

export class LoginComponent implements OnInit {
    hide = true;
    isDisabled: boolean = true;


    loginForm: FormGroup = this.formBuilder.group({
        userName: [''],
        password: ['']

    })



    constructor(private formBuilder: FormBuilder,
        private store: Store
    ) { }

    ngOnInit() {
        //console.log(this.loginForm.controls.userName)
        // if (
        //     this.loginForm.controls.userName.value === "" ||
        //     this.loginForm.controls.password.value === ""
        // ) { this.isDisabled = true }
        // else {
        //     this.isDisabled = false
        // }


    }

    onLogin() {
        const { userName, password } = this.loginForm.value;
        const userInfo = new UserInfo(userName, password);
        // this.store.dispatch(login({ login: userInfo }));
        // this.store.dispatch(navigate({ url: '' }))
    }
}




