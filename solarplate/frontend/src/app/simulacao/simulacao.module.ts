import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SimulacaoComponent} from './simulacao.component';
import {SimulacaoRoutingComponent} from './simulacao-routing.component';
import {SimulacaoRoutingModule} from './simulacao-routing.module';


@NgModule({
  declarations: [
    SimulacaoComponent,
    SimulacaoRoutingComponent
  ],
  imports: [
    CommonModule, SimulacaoRoutingModule
  ],
  exports: [SimulacaoComponent]
})
export class SimulacaoModule { }
