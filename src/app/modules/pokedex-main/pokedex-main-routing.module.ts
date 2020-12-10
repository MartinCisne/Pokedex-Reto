import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexLayoutComponent } from './components/pokedex-layout/pokedex-layout.component';
import { PokedexSearchComponent } from './components/pokedex-search/pokedex_search.component';


const routes: Routes = [
  { path: '', component: PokedexLayoutComponent,
    children:[
      { path: 'pokedex-search', component: PokedexSearchComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexMainRoutingModule { }
