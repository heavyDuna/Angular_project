import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarteleraRespuesta } from '../interfaces/cartelera-respuesta';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http : HttpClient ) { }

    recuperarCartelera():Observable<CarteleraRespuesta> {

      return this.http.get<CarteleraRespuesta>('https://api.themoviedb.org/3/movie/now_playing?api_key=KEY&language=es-ES&page=1')
  }
}
