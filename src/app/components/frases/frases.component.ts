import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.scss'
})
export class FrasesComponent {
  phrases: string[] = ["O café está quente.", "Preciso dormir cedo.", "O sol nasceu forte hoje.",
    "Esqueci minha senha de novo.", "A música está muito alta.", "Quero viajar neste fim de semana.",
    "O cachorro latiu a noite toda.", "A bateria do celular acabou rápido.", "Choveu bastante ontem.",
    "O tempo passou voando."]
  drawnPhrase: string = ""

  public randomPhrase() : void {
    this.drawnPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)]
  }
}

