import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { Inject } from "@angular/core";
import { Address } from "./address.model";
import { AddressService } from "./address.service";
import { AuthService } from "../auth/auth.service";
@Component({
  selector: 'app-change-address',
  templateUrl: './change-address.component.html',
  styleUrls: ['./change-address.component.css']
})
export class ChangeAddressComponent implements OnInit {

  address : Address;

  constructor(private route: ActivatedRoute, private router: Router,private addressService: AddressService, 
    private authService: AuthService) { 
    console.log(" Change Address component created ");
  }

  ngOnInit() {
    this.address = new Address();
    this.route.params.forEach((params: Params) => {
      let id: number = params["id"];
      console.log("address id is ", id);
      if (id) {
        this.addressService.getAddress(id)
          .then((data: any) => {
            this.address = data;
            console.log(" got address ");
            console.log(this.address);
          });
      }
    });
  }

  updateAddress() {
        console.log("Address for update - ", this.address);
        
        this.addressService.changeAddress(this.address)
        .subscribe((data:any) => {
            console.log(data);
            this.router.navigate(["/personal-details/"+this.authService.getIdentity().id]);
        });

     }

}
