import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexSearchComponent } from './components/pokedex-search/pokedex_search.component';
import { PokedexMainComponent } from './pokedex-main.component';


const routes: Routes = [
  {
    path: '', component:PokedexMainComponent,
    children:[
      {path: 'search', component:PokedexSearchComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexMainRoutingModule { }
