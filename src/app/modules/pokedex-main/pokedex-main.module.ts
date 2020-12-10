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

@NgModule({
  declarations: [PokedexMainComponent,PokedexSearchComponent,PokedexInfoComponent,SidebarComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    NgxChartsModule,
    PokedexMainRoutingModule
  ]
})
export class PokedexMainModule { }
