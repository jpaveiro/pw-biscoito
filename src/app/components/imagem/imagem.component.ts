import { Component } from '@angular/core';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.scss'
})
export class ImagemComponent {
  biscoito: string = '/biscoito.png'
  biscoitoAberto: string = '/biscoito-aberto.png'
}
