import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
})
export class ClienteComponent implements OnInit {



  clientes: Cliente[] = [
    { id: 1, nombre: 'DoomSlayer', apellido: 'ToMadToDie', email: 'DoomSlayer@ToMadToDie.com'} ,
    { id: 2, nombre: 'IMP', apellido: 'IMP', email: 'IMP@DestinedToDie.com'},
    { id: 3, nombre: 'Cacodemon', apellido: 'Cacodemon', email: 'Cacodemon@DestinedToDie.com'},
    { id: 4, nombre: 'Samuel', apellido: 'Hayden', email: 'SamuelHayden@banishingIntoDamnation.com'},
    { id: 5, nombre: 'Olivia', apellido: 'Pierce', email: 'OliviaPierce@banishingIntoDamnation.com'},
    { id: 6, nombre: 'Dr', apellido: 'Darling', email: 'DrDarling@banishingIntoDamnation.com'},
    { id: 7, nombre: 'Jesse', apellido: 'Faden', email: '@banishingIntoDamnation.com'},
    { id: 8, nombre: 'The', apellido: 'Board', email: '@TakingControl.com'},
    { id: 9, nombre: 'Alan', apellido: 'Wake', email: '@WritingAStory.com'}
];







  constructor() { }


  ngOnInit() {
  }

}
