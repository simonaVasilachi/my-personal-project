import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginView } from "../Views/login.view/login.view";

const routes: Routes = [
    {
        path: '',
        component: LoginView
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }