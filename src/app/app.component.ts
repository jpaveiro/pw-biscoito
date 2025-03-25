import { Component } from '@angular/core';
import { BotaoComponent } from "./components/botao/botao.component";

@Component({
  selector: 'app-root',
  imports: [BotaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pw3-biscoito';
}
