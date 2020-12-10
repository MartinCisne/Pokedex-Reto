import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokedexSearchComponent } from './components/pokedex_search/pokedex_search.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'pokedex', component: PokedexSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
