import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
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
     hide=true;
     


        loginForm = this.formBuilder.group({
            userName: [''],
            password: ['']
            
        })

        

    constructor(private formBuilder: FormBuilder,
        private store: Store
    ) { }

    ngOnInit() {
     
    }

    onLogin() {
        const { userName, password } = this.loginForm.value;
        const userInfo = new UserInfo(userName, password);
        this.store.dispatch(login({ login: userInfo }));
        this.store.dispatch(navigate({url: ''}))
        
    }
}




