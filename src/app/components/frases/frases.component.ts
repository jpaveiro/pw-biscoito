import { Component, Input, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.scss'
})
export class FrasesComponent {
  frases: string[] = ["O café está quente.", "Preciso dormir cedo.", "O sol nasceu forte hoje.",
    "Esqueci minha senha de novo.", "A música está muito alta.", "Quero viajar neste fim de semana.",
    "O cachorro latiu a noite toda.", "A bateria do celular acabou rápido.", "Choveu bastante ontem.",
    "O tempo passou voando."]
  fraseAleatoria: string = ""
  @Input() mostrarMensagem : boolean = false;

  ngOnChanges(changes: SimpleChanges): void
  {
    if (changes['mostrarMensagem']) {
      this.ocultarOuExibirFrase();
    }
  }

  public ocultarOuExibirFrase() : void
  {
    if (this.mostrarMensagem)
      this.fraseAleatoria = this.frases[Math.floor(Math.random() * this.frases.length)];
    else
      this.fraseAleatoria = ""
  }
}
