import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from "@angular/http";

import { RouterModule, Routes } from '@angular/router';
import { Http } from "@angular/http";

import {HomeModule} from "./home/home.module";
import { AuthModule } from "./auth/auth.module";

import * as config from "./app.config";
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationSuccessfulComponent } from "./registration/registration-successful.component";
import { AddressComponent } from './address/address.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ChangeAddressComponent } from './address/change-address.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { PersonalDetailsService } from "./personal-details/personal-details.service";
import { AddressService } from "./address/address.service";
import { RegistrationService } from "./registration/registration.service";
import { HeaderComponent } from "./shared/header.component";
import { FooterComponent } from "./shared/footer.component";

const appRoutes: Routes = [
  { path: 'register',      component: RegistrationComponent },
  { path: 'register-success',      component: RegistrationSuccessfulComponent },
  { path: 'personal-details',      component: PersonalDetailsComponent },
  { path: 'personal-details/:id',      component: PersonalDetailsComponent },
  { path: 'change-address',      component: ChangeAddressComponent },
  { path: 'change-address/:id',      component: ChangeAddressComponent },
  //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    AddressComponent,
    PersonalDetailsComponent,
    ChangeAddressComponent,
    PageNotFoundComponent,
    RegistrationSuccessfulComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HomeModule,
    AuthModule
  ],
  providers: [
    PersonalDetailsService,
    {
      provide: "apiEndPoint",
      useValue: config.API_END_POINT
    },
    AddressService,
    RegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }