import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardapioComponent } from './cardapio/cardapio.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HomeComponent } from './home/home.component';
import { ProgramacaoComponent } from './programacao/programacao.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';


const APP_ROTAS: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'programacao', component: ProgramacaoComponent},
  {path: 'comidas-bebidas', component: CardapioComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'sugestoes', component: SugestoesComponent}
];

//@NgModule({
  //imports: [RouterModule.forRoot(APP_ROTAS)],
 // exports: [RouterModule]
//})
export const AppRoutingModule : ModuleWithProviders = RouterModule.forRoot(APP_ROTAS);
