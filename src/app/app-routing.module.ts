import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'pokedex', 
    loadChildren: ()=> import('../app/modules/pokedex-main/pokedex-main.module').then(m=>m.PokedexMainModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
