import { Component, OnInit } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
})
export class ClienteComponent implements OnInit {

  clientes: Cliente [];

  constructor() { }

  ngOnInit() {
    this.clientes = CLIENTES ;
  }

}
