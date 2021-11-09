import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { UserInterface } from "src/app/Entities/user.interface";
import { UsersService } from "src/app/Services/users.service";



@Component({
    selector: 'dashboard-view',
    templateUrl: 'dashboard-view.component.html'
})

export class DashboardViewComponent implements OnInit {
    users: UserInterface[] = []

    constructor(private http: HttpClient, private usersService: UsersService) { }

    ngOnInit(): void {
        this.usersService.getUsers().subscribe((users: UserInterface[]) => {
            console.log('res', users)
            this.users = users
        })

    }
}