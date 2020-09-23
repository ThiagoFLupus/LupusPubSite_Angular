import { Injectable } from '@angular/core';
import { Imagem } from './galeria/imagem';
@Injectable({
  providedIn: 'root'
})
export class GaleriaFotosService {
  imagens: Imagem[];

  constructor() { }

  getImagens(){
    this.imagens= [{"id": 1, "caminhoPasta": "assets/galeriaFotos/foto_01.jpg"},
                   {"id": 2, "caminhoPasta": "assets/galeriaFotos/foto_02.jpg"},
                   {"id": 3, "caminhoPasta": "assets/galeriaFotos/foto_03_.jpg"},
                   {"id": 4, "caminhoPasta": "assets/galeriaFotos/foto_04.jpg"},
                   {"id": 5, "caminhoPasta": "assets/galeriaFotos/foto_05.jpg"},
                   {"id": 6, "caminhoPasta": "assets/galeriaFotos/foto_06.jpg"},
                   {"id": 7, "caminhoPasta": "assets/galeriaFotos/foto_07.jpg"},
                   {"id": 8, "caminhoPasta": "assets/galeriaFotos/foto_08.jpg"},
                   {"id": 9, "caminhoPasta": "assets/galeriaFotos/foto_09.jpg"}
              ];
    return this.imagens;
  }

}
