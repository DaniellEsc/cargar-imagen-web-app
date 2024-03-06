import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ListaImagenesComponent } from './pages/lista-imagenes/lista-imagenes.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListaImagenesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [

  ]

})
export class ImagenesModule { }
