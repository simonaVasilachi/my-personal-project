import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "../Views/admin.view/admin.component";

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [AdminComponent]
})
export class AdminModule { }