import { Component, OnInit } from '@angular/core';
import { barco } from '../barco';
import { FRAGATAS } from '../mock-barcos';

@Component({
  selector: 'app-barcos',
  templateUrl: './barcos.component.html',
 styleUrls: ['./barcos.components.css']
})

export class BarcosComponents implements OnInit {
  
  Barcoss = FRAGATAS;
  selectedBarco?: barco;

  onSelect(barco: barco): void {
    this.selectedBarco = barco;
  }
  constructor() { }
  ngOnInit(): void {}


}