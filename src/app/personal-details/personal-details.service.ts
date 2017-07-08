import { Injectable, Inject } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";

import 'rxjs/Rx';
import {Subject}    from 'rxjs/Subject';

@Injectable()
export class PersonalDetailsService {

  constructor(private http: Http, @Inject("apiEndPoint") private apiEndPoint:string) { }

  getCustomer(id: any) {
        return this.http.get(this.apiEndPoint + "/customerservice/customers/"+id)
            .map( (response: Response) => response.json())
        .toPromise()
  }

}
