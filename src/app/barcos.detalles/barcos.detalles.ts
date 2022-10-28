import { barco } from '../barco';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-barco-detalles',
  templateUrl: './barcos.detalles.html',
})
export class BarcoDetalleComponent implements OnInit {
  @Input() barco?: barco;

  
  constructor() { }

  ngOnInit(): void {
  }

}