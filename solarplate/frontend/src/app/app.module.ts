import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaPrincipalModule} from './tela-principal/tela-principal.module';
import { SimulacaoModule} from './simulacao/simulacao.module'
import { LoginModule} from './login/login.module'



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    TelaPrincipalModule,
    SimulacaoModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
