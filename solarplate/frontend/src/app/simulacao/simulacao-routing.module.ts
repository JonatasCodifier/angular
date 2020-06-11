import{NgModule} from '@angular/core';
import{RouterModule, Routes} from '@angular/router';

import {SimulacaoComponent} from './simulacao.component';
import {SimulacaoRoutingComponent} from './simulacao-routing.component';

export const SimulacaoRoutes: Routes = [{
    path: 'simulacao',
    component: SimulacaoRoutingComponent,
    children: [{
        path:'',
        component: SimulacaoComponent
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(SimulacaoRoutes)],
    exports: [RouterModule]
})

export class SimulacaoRoutingModule{}
