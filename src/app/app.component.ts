import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Lupus Pub';

  menuFechado: boolean= false;
  tamanhoJanela: number;
  desk: boolean;

  comportarMenu(){
    this.menuFechado= !this.menuFechado;
  }

  eventoAlteracaoJanela(){
    this.tamanhoJanela = window.innerWidth;
    if(this.tamanhoJanela > 680){
      this.desk= true;
    }else{
      this.desk= false;
    }
  }

  fecharMenuSmart(){
    if(!this.desk){
      this.comportarMenu();
    }
  }

  ngOnInit(){
    this.tamanhoJanela = window.innerWidth;
    if(this.tamanhoJanela > 680){
      this.desk= true;
    }
  }
}
