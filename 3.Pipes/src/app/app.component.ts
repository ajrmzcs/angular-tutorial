import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = "Antonio";
  nombre2 = "antonio jose raMIrez castillo";

  array = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a = 0.234;

  number_example = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "wolverine",
    edad: "500",
    direccion : {
      calle: "Primera",
      casa: "19"
    }
  }

  promiseValue = new Promise( ( resolve, reject )=> {

    setTimeout( ()=>resolve('Lego la data!'), 3500 );


  } );

  exampleDate = new Date();

  video = "NMNgbISmF4I?ecver=1";

  activar:boolean = true;

}
