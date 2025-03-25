import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-biscoito',
  imports: [],
  templateUrl: './biscoito.component.html',
  styleUrl: './biscoito.component.scss'
})
export class BiscoitoComponent {
  @Input() aberto: boolean = false;
}
