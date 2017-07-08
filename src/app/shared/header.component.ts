import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../auth/auth.service";

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
    isLoggedIn: boolean;
    loggedInUser: any = {};

    constructor(private router: Router, private authService: AuthService) {
        this.isLoggedIn = this.authService.isAuthenticated();
        console.log("inside Header constructor");

    }


    ngOnInit() {
        this.authService.getAuthNotification()
            .subscribe((status: boolean) => {
                this.isLoggedIn = status;
                if (this.isLoggedIn) {
                    this.loggedInUser = this.authService.getIdentity();
                    console.log("Logged in user - " + this.loggedInUser);
                }
                else
                    this.loggedInUser = {};
            })
    }

    logout() {
        this.authService.logout();
        this.router.navigate(["/"]);
    }


    changeLang(code: string) {
        //this.translate.use(code);
    }
}