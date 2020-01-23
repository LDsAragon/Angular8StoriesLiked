import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
 })
export class DirectivaComponent {

  listaCurso: String[] = ['Doom','Slayer','Rip','And','Tear'];

  habilitar: Boolean = true ;
  textoBoton: String = 'Ocultar' ;

  constructor() { }


  setHabilitar(): void {
    if (this.habilitar == true){
      this.habilitar = false ; 
      this.textoBoton = 'Mostrar' ;
    } else {
      this.habilitar = true ; 
      this.textoBoton = 'Ocultar' ;

    }

    // this.habilitar = (this.habilitar == true) ? false : true 
  }


}
