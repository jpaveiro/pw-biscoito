import { Component } from '@angular/core';
import { opendir } from 'node:fs';
import { FrasesComponent } from '../frases/frases.component';

@Component({
  selector: 'app-imagem',
  imports: [ FrasesComponent ],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.scss'
})
export class ImagemComponent {
  cookieImage: string = "/biscoito-aberto.png"
  showPhrase: boolean = false;

  public swapCookie() : void
  {
    const opened = "/biscoito-aberto.png"
    const closed = "/biscoito.png"

    if (this.cookieImage == opened)
    {
      this.showPhrase = true;
      this.cookieImage = closed;
    }
    else
    {
      this.showPhrase = false;
      this.cookieImage = opened;
    }
  }
}