import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginModule } from "../Components/login/login.module";
import { LoginViewComponent } from '../Views/login-view/login-view.component'
import { MatCardModule } from '@angular/material/card';


const routes: Routes = [
    {
        path: '',
        component: LoginViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), LoginModule, MatCardModule],
    declarations: [LoginViewComponent],
    exports: [RouterModule]
})
export class LoginRoutingModule { }