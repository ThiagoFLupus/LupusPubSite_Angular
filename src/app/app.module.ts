import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProgramacaoComponent } from './programacao/programacao.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgramacaoComponent,
    CardapioComponent,
    GaleriaComponent,
    SugestoesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
