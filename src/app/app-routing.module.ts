import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './imagenes/pages/home/home.component';
import { ListaImagenesComponent } from './imagenes/pages/lista-imagenes/lista-imagenes.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path: 'lista', component: ListaImagenesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
