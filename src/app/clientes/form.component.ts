import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router';
import  swal  from 'sweetalert2' ;



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})

export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente ; 
  private titulo: String = "Crear Cliente" ;
  
  constructor(
    private clienteService: ClienteService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  public create(): void{
    this.clienteService.create(this.cliente).subscribe( 
      response => {
        this.router.navigate(['/clientes']) ;
        swal.fire('Nuevo Personaje' , `Personaje ${this.cliente.nombre} creado con exito` , 'success' );
      }
    )
  }

}
