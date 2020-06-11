import{NgModule} from '@angular/core';
import{RouterModule, Routes} from '@angular/router';

import {TelaPrincipalComponent} from './tela-principal.component';
import {TelaPrincipalRoutingComponent} from './tela-principal-routing.component';

export const TelaPrincipalRoutes: Routes = [{
    path: 'tela-principal',
    component: TelaPrincipalRoutingComponent,
    children: [{
        path:'',
        component: TelaPrincipalComponent
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(TelaPrincipalRoutes)],
    exports: [RouterModule]
})

export class TelaPrincipalRoutingModule{}
