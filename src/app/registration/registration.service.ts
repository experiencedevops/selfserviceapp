import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { Registration } from "./registration.model";

@Injectable()
export class RegistrationService {

  constructor(private http: Http, @Inject("apiEndPoint") private apiEndPoint: string) { 

  }

  registerCustomer(registrationObj: Registration){
    let data: any = {};
    data = registrationObj;

    return this.http.post(this.apiEndPoint + "/customerservice/register", data)
      .map((response: Response) => {
        var result = response.json();
        console.log("result is ", result);
        return result;
    })
  }
}
