import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { DashboardRoutingModule } from "../../Routing/dashboard-routing.module";
import { DashboardViewComponent } from "../../Views/dashboard-view/dashboard-view.component";
import { UsersService } from "src/app/Services/users.service";

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    declarations: [DashboardViewComponent],
    providers: [UsersService]
})
export class DashboardModule { }