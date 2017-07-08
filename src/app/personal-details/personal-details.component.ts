import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { PersonalDetailsService } from "./personal-details.service";
import { Customer } from "./customer.model";
import { User } from "../registration/user.model";
import { Address } from "../address/address.model";

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  customer: Customer;

  constructor(private route: ActivatedRoute, private personalDetailsService: PersonalDetailsService) {
    console.log(" Personal details component created ");
  }

  ngOnInit() {
    console.log("ngOnInit on Personal Details");
    this.customer = new Customer();
    this.customer.addresses = new Array<Address>();
    this.customer.user = new User();
    this.route.params.forEach((params: Params) => {
      let id: number = params["id"];
      console.log("id is ", id);
      if (id) {
        this.personalDetailsService.getCustomer(id)
          .then((data: any) => {
            this.customer = data;
            console.log(" got customer ");
            console.log(this.customer);
          });
      }
    });

  }

}
