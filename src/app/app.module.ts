import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { PeliculasService } from './services/peliculas.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,  //para tener cualquier componente definido en components.module
    PagesModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
