import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/cartelera-respuesta';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public peliculasSlider: Pelicula[] = [];
  public peliculas: Pelicula[] = [];

  @HostListener('window: scroll') //Escucha el evento del host

  onScroll() { //cada vez que se haga scroll

    const scrollPos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const scrollMaxPos = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (scrollPos > scrollMaxPos) {
      //llamamos al servicio
      this.PeliculasService.recuperarCartelera().subscribe( resp => {
        this.peliculas.push(...resp.results);   //incrementar en el array las nuevas películas
      })
    }
  }

  constructor(private PeliculasService : PeliculasService) { }

  ngOnInit(): void {
      this.PeliculasService.recuperarCartelera()
        .subscribe( resp => {
          this.peliculas = resp.results;
          this.peliculasSlider = resp.results;
        })
  }

  ngOnDestroy() {
    this.PeliculasService.resetPeliculasSlider();
  }

}
