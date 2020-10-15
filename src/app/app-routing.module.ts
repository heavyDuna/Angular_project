import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { SearchComponent } from './pages/search/search.component';

//definición de rutas
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'pelicula/:id',
    component: PeliculaComponent
  },

  {
    path: 'search/:texto',
    component: SearchComponent
  },

  {
    path: '**',
    redirectTo: '/home'
  }
];

//crea modulos internamente
@NgModule({
  imports: [
    RouterModule.forRoot(routes) //forRoot rutas principales, forChild rutas hijas
  ],

  //exportarlo para que la app pueda utilizarlo importandolo
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
