import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { CarteleraRespuesta, Pelicula } from '../interfaces/cartelera-respuesta';
import { PeliculaDetalle } from '../interfaces/pelicula-detalle';
import { CreditosRespuesta, Cast } from '../interfaces/creditos-respuesta';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private url: string = 'https://api.themoviedb.org/3';
  private carteleraPagina = 1;

  constructor( private http : HttpClient ) { }

  get urlParams() {

    return {                                          //el objeto con los parámetros que necesitan todas las peticiones
      api_key: environment.api_key,
      language: 'es-ES',
      page: this.carteleraPagina.toString()
    }
  }

  resetPeliculasSlider() {
    this.carteleraPagina = 1;

  }

  recuperarCartelera():Observable<CarteleraRespuesta> {

    return this.http.get<CarteleraRespuesta>(`${ this.url }/movie/now_playing`,{
      params: this.urlParams      //parámetros de la query que concateno a la url
    }).pipe(
      tap( () => {                //cada vez que el CarteleraResponse emita un valor
        this.carteleraPagina += 1;    //se incrementa la página de la cartelera
      })
    );
  }


  buscarPeliculas( texto: string ):Observable<Pelicula[]> {

    const params = {...this.urlParams, page: '1', query: texto };    //desestructurando el objeto urlParams() para tener en la page 1

    return this.http.get<CarteleraRespuesta>(`${ this.url }/search/movie`,{
      params
    }).pipe(
      map( resp => resp.results )
    )
  }

  recuperarDetallesPelicula( id: string )  {

    return this.http.get<PeliculaDetalle>(`${ this.url }/movie/${ id }`,{
      params: this.urlParams                                        //parámetros de la query que concateno a la url
    });
  }

  recuperarCastPelicula( id: string ):Observable<Cast[]> {

    return this.http.get<CreditosRespuesta>(`${ this.url }/movie/${ id }/credits`,{
      params: this.urlParams
    }).pipe (
      map( resp => resp.cast )
    )
  }

}
