import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';
import { CarteleraRespuesta } from './interfaces/cartelera-respuesta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private PeliculasService : PeliculasService ) {

    this.PeliculasService.recuperarCartelera()
      .subscribe( (resp: CarteleraRespuesta) => {
        console.log(resp);


      })
  }
}
