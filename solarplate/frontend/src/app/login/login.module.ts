import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoginComponent} from './login.component';
import {LoginRoutingComponent} from './login-routing.component';
import {LoginRoutingModule} from './login-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    LoginRoutingComponent
  ],
  imports: [
    CommonModule, LoginRoutingModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
