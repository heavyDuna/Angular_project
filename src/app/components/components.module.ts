import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { PipesModule } from '../pipes/pipes.module';
import { CastSliderComponent } from './cast-slider/cast-slider.component';
import { AutButtonComponent } from './aut-button/aut-button.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    PeliculasPosterGridComponent,
    CastSliderComponent,
    AutButtonComponent,
    ModalComponent
  ],
  exports: [                          //para poder utilizarlo fuera también
    NavbarComponent,
    SliderComponent,
    PeliculasPosterGridComponent,
    CastSliderComponent,
    AutButtonComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ]
})
export class ComponentsModule { }
