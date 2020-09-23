import { Component, OnInit } from '@angular/core';
import { GaleriaFotosService } from '../galeria-fotos.service';
import { Imagem } from './imagem';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  imagensGaleria: Imagem[];
  tamanhoJanela: number;
  jan: string;

  constructor(private galeriaService: GaleriaFotosService) { 
    this.imagensGaleria= <Imagem[]>this.galeriaService.getImagens();
  }

  ngOnInit(): void {
    this.tamanhoJanela= window.innerWidth;
    this.verificarTamanhoJanela();
  }

  verificarTamanhoJanela(){
    this.tamanhoJanela= window.innerWidth;
    if(this.tamanhoJanela <= 360 ){
      this.jan= "smart";
    } else if(this.tamanhoJanela > 360 && this.tamanhoJanela <= 680){
      this.jan= "medio";
    } else if(this.tamanhoJanela > 680 && this.tamanhoJanela <= 900){ 
      this.jan= "desk";
    }else {
      this.jan= "pc";
    }

    for(let item of this.imagensGaleria){
      console.log(item.caminhoPasta);
    }
    console.log(this.jan);
  }
}
