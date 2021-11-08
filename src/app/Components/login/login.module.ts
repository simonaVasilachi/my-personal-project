import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        MatFormFieldModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatButtonToggleModule,
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule {}