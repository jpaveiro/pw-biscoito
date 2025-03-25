import { Component } from '@angular/core';
import { BiscoitoComponent } from "../biscoito/biscoito.component";
import { FrasesComponent } from '../frases/frases.component';

@Component({
  selector: 'app-botao',
  imports: [BiscoitoComponent, FrasesComponent],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.scss'
})
export class BotaoComponent {
  biscoitoAberto: boolean = false;
  mostrarMensagem: boolean = false;

  public quebrarBiscoito() : void
  {
    if (this.biscoitoAberto) return;
    this.biscoitoAberto = true;
    this.mostrarMensagem = true;
    // gerar frase
  }

  public reiniciarBiscoito() : void
  {
    if (!this.biscoitoAberto) return;
    this.biscoitoAberto = false;
    this.mostrarMensagem = false;
    // sumir com a frase
  }
}
