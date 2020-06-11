import{NgModule} from '@angular/core';
import{RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login.component';
import {LoginRoutingComponent} from './login-routing.component';

export const LoginRoutes: Routes = [{
    path: 'login',
    component: LoginRoutingComponent,
    children: [{
        path:'',
        component: LoginComponent
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(LoginRoutes)],
    exports: [RouterModule]
})

export class LoginRoutingModule{}
