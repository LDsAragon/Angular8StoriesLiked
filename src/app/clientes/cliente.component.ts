import { Component, OnInit } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
})
export class ClienteComponent implements OnInit {

  clientes: Cliente [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clientes = this.clienteService.getClientes() ;
  }

}
