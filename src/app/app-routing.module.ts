import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokedexInfoComponent } from './components/pokedex-info/pokedex-info.component';
import { PokedexMainComponent } from './modules/pokedex-main/pokedex-main.component';
import { PokedexSearchComponent } from './components/pokedex_search/pokedex_search.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'pokedex-main',
   component: PokedexMainComponent,
   children:[
    {path: 'pokedex-search', component: PokedexSearchComponent}
   ]},
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
