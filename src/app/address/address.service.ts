import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { Address } from "./address.model";

@Injectable()
export class AddressService {

  constructor(private http: Http, @Inject("apiEndPoint") private apiEndPoint: string) { }

  getAddress(id: any) {
    return this.http.get(this.apiEndPoint + "/addressservice/addresses/" + id)
      .map((response: Response) => response.json())
      .toPromise()
  }

  changeAddress(address: Address) {
    let data: any = {};
    data["line1"] = address.line1;
    data["line2"] = address.line2;
    data["county"] = address.county;
    data["country"] = address.country;
    data["postcode"] = address.postcode;
    return this.http.post(this.apiEndPoint + "/addressservice/addresses/" + address.id, data)
      .map((response: Response) => {
        var result = response.json();
        console.log("result is ", result);
        return result;
      })

  }

}
