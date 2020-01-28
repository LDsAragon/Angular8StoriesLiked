import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable } from 'rxjs' ;
import { HttpClient } from '@angular/common/http' ;
import { map } from 'rxjs/operators' ;
import { CLIENTES } from './clientes.json';
import { of } from 'rxjs' ;

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  private urlEndPoint: string = 'http://localhost:8080/api/clientes' ;  

  constructor(private http: HttpClient) { }


  getClientes(): Observable<Cliente[]> {
    /* La vieja busqueda del objeto json a objeto de angular */
    // return of(CLIENTES);

    /* Metodo diferente para tomar el objeto de tipo cliente en la vista*/
    // return this.http.get<Cliente[]>(this.urlEndPoint);  

    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Cliente[])

    );
  } 


}
