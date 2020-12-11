import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PokedexMainComponent } from './pokedex-main.component';
import { PokedexSearchComponent } from './components/pokedex-search/pokedex_search.component';
import { PokedexInfoComponent } from './components/pokedex-info/pokedex-info.component';
import { PokedexMainRoutingModule } from './pokedex-main-routing.module';
import { SidebarComponent } from 'src/app/components/side-bar/sidebar.component';
import { PokedexDashboardComponent } from './components/pokedex-dashboard/pokedex-dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PokedexFavoritesComponent } from './components/pokedex-favorites/pokedex-favorites.component';


@NgModule({
  declarations: [
    PokedexMainComponent,
    PokedexDashboardComponent, 
    PokedexSearchComponent,
    PokedexInfoComponent,
    PokedexFavoritesComponent,
    SidebarComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    NgxChartsModule,
    PokedexMainRoutingModule,
    FontAwesomeModule
  ]
})
export class PokedexMainModule { }
