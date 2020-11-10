import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CarteleraRespuesta } from '../interfaces/cartelera-respuesta';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private url: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;

  constructor( private http : HttpClient ) { }

  get urlParams() {

    return {                                          //el objeto con los parámetros que necesitan todas las peticiones
      api_key: 'KEY',
      language: 'es-ES',
      page: this.carteleraPage.toString()
    }
  }

  recuperarCartelera():Observable<CarteleraRespuesta> {

    return this.http.get<CarteleraRespuesta>(`${ this.url }/movie/now_playing`,{
      params: this.urlParams      //parámetros de la query que concateno a la url
    }).pipe(
      tap( () => {                //cada vez que el CarteleraResponse emita un valor
        this.carteleraPage += 1;    //se incrementa la página de la cartelera
      })
    );
  }
}
