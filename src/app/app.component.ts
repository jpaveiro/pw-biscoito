import { Component } from '@angular/core';
import { ImagemComponent } from './components/imagem/imagem.component';

@Component({
  selector: 'app-root',
  imports: [ImagemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pw3-biscoito';
}
