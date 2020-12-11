import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexDashboardComponent } from './components/pokedex-dashboard/pokedex-dashboard.component';
import { PokedexFavoritesComponent } from './components/pokedex-favorites/pokedex-favorites.component';
import { PokedexInfoComponent } from './components/pokedex-info/pokedex-info.component';
import { PokedexSearchComponent } from './components/pokedex-search/pokedex_search.component';
import { PokedexMainComponent } from './pokedex-main.component';


const routes: Routes = [
  {
    path: '', component:PokedexMainComponent,
    children:[
      {path:'',component:PokedexDashboardComponent},
      {path: 'search', component:PokedexSearchComponent},
      {path: 'favorites', component:PokedexFavoritesComponent},
      {path: 'info/:url', component:PokedexInfoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexMainRoutingModule { }
