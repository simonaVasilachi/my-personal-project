import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AdminRoutingModule } from "../../Routing/admin-routing.module";
import { AdminComponent } from "../../Views/admin-view/admin-view.component";

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [AdminComponent]
})
export class AdminModule { }