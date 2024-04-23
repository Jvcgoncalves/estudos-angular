import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.scss'
})
export class OutputPropertyComponent {
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  constructor () { }

  incrementa(){
    this.valor++
    this.mudouValor.emit({ novoValor: this.valor })
  }

  decrementa(){
    this.valor--
    this.mudouValor.emit({ novoValor: this.valor })
  }
}
