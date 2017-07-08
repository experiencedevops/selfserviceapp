import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Registration } from './registration.model';
import { RegistrationService } from './registration.service';
import { Address } from "../address/address.model";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationModel : Registration;

  constructor(private router: Router, private registrationService: RegistrationService) {
    this.registrationModel = new Registration();
    this.registrationModel.addresses = new Array<Address>();
    this.registrationModel.addresses[0] = new Address();
    console.log('Registration component created');
  }

  ngOnInit() {
  }

  register() {
        console.log("Registration detials - ", this.registrationModel);
        
        this.registrationService.registerCustomer(this.registrationModel)
        .subscribe((data:any) => {
            console.log(data);
            this.router.navigate(["/register-success/"]);
        });

     }

}
