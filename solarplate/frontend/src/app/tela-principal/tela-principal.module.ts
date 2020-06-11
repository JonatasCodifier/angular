import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TelaPrincipalComponent} from './tela-principal.component';
import {TelaPrincipalRoutingComponent} from './tela-principal-routing.component';
import {TelaPrincipalRoutingModule} from './tela-principal-routing.module';


@NgModule({
  declarations: [
    TelaPrincipalComponent,
    TelaPrincipalRoutingComponent
  ],
  imports: [
    CommonModule, TelaPrincipalRoutingModule
  ],
  exports: [TelaPrincipalComponent]
})
export class TelaPrincipalModule { }
