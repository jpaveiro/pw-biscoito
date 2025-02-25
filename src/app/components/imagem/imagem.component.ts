import { Component } from '@angular/core';
import { opendir } from 'node:fs';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.scss'
})
export class ImagemComponent {
  cookieImage: string = "/biscoito-aberto.png"

  public swapCookie() : void
  {
    const opened = "/biscoito-aberto.png"
    const closed = "/biscoito.png"

    this.cookieImage = (this.cookieImage == opened) ? closed : opened;
  }
}